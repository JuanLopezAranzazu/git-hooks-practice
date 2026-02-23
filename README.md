# Git Hooks Practice

Este es un proyecto de práctica para aprender a usar los git hooks. Los git hooks son scripts que se ejecutan automáticamente en ciertos momentos del ciclo de vida de un repositorio git. Por ejemplo, se pueden usar para ejecutar pruebas antes de hacer un commit, o para enviar un mensaje de commit personalizado.

## Hooks usados en este proyecto

- `pre-commit`: Este hook se ejecuta antes de hacer un commit. En este proyecto, se usa para ejecutar lint-staged, que es una herramienta que ejecuta linters en los archivos que se van a commitear.

- `pre-push`: Este hook se ejecuta antes de hacer un push. En este proyecto, se usa para ejecutar tests con Jest, asegurando que no se puedan subir cambios que rompan el código.
