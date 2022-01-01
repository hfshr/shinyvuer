# Set options here
options(golem.app.prod = FALSE) # TRUE = production mode, FALSE = development mode
options(shiny.port = httpuv::randomPort())
golem::detach_all_attached()
golem::document_and_reload()
run_app(options = list(shiny.launch.browser = ".rs.invokeShinyWindowExternal"))