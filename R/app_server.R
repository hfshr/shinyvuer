#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @noRd
app_server <- function(input, output, session) {
  # Your application server logic
  mtcars_tidy <- mtcars %>%
    tibble::rownames_to_column(var = "all_cars") %>%
    dplyr::select(1:4)

  rVuexSetState(
    session,
    "mtcars",
    mtcars_tidy
  )

  observe({
    mtcars_sample <- mtcars_tidy %>%
      dplyr::slice_sample(n = 10)
    rVuexSetState(
      session,
      "mtcars",
      mtcars_sample
    )
  }) %>%
    bindEvent(
      input$updateTable,
      ignoreNULL = TRUE
    )

  output$hist_plot <- renderPlot({
    if (is.null(input$hist)) val <- 10 else val <- input$hist
    x <- faithful[, 2]
    bins <- seq(min(x), max(x), length.out = val + 1)

    # draw the histogram with the specified number of bins
    hist(x, breaks = bins, col = "darkgray", border = "white")
  })


  observe({
    if (!is.null(input$penguin)) {
      penguin <- palmerpenguins::penguins %>%
        dplyr::filter(species == input$penguin) %>%
        dplyr::group_by(species) %>%
        dplyr::summarise(
          dplyr::across(
            .cols = c(
              bill_length_mm,
              flipper_length_mm,
              bill_depth_mm,
              body_mass_g
            ),
            .fns = ~ round(mean(.x, na.rm = TRUE), 2)
          )
        )

      rVuexSetState(
        session,
        "penguin",
        penguin
      )
    }
  })

  session$onSessionEnded(function() {
    stopApp()
  })
}