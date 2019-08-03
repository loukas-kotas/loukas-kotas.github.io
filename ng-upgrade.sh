# # remove deprecated rxjs 6 packages
# npm install -g rxjs-tslint
# rxjs-5-to-6-migrate -p src/tsconfig.app.json

# # update core
# ng update @angular/cli @angular/core


# ng update @angular/cli @angular/core


npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json --next --force
ng update @angular/cli @angular/core  --next --force
