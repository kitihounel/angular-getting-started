# Notes

## How to Create a Project With Specific Angular Version
You need to have `npx` installed. It is available by default on recent versions of NodeJS.

Then we need to execute `npx` command with the `-p` parameter where we put a specific
`@angular/cli` version. The last element of this statement is a command that creates an
application on a specific `@angular/cli` version `ng new [name of the project]`.

```sh
# The following creates an app with Angular 11.0.2
npx -p @angular/cli@11.0.2 ng new dummy-app
```

Procedure found @ https://frontbackend.com/angular/how-to-generate-angular-application-in-a-specific-version-using-ng-new-command.
