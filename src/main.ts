import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// const appConfig = {
//   providers: [
//     importProvidersFrom(HttpClientModule),
//     // No need for `withFetch()`, Angular Universal automatically uses `fetch` in SSR
//   ],
// };

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
