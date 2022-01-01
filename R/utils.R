#' @importFrom dplyr `%>%`
#' @importFrom jsonlite toJSON

# from R to JavaScript event bus
rBus <- function(session, message) {
    session$sendCustomMessage(
        "r2vue",
        toJSON(message, auto_unbox = TRUE)
    )
}

# from R to JavaScript Vuex
rVuex <- function(session, mutation, value) {
    session$sendCustomMessage(
        "r2vuex",
        list(
            mutation = mutation,
            value = toJSON(value, auto_unbox = TRUE)
        )
    )
}

rVuexSetState <- function(session,
                          key,
                          value,
                          auto_unbox = TRUE) {
    session$sendCustomMessage(
        "rVuexSetState",
        list(
            key = key,
            value = toJSON(value, auto_unbox = auto_unbox)
        )
    )
}

