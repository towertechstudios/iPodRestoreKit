# Publish the compatibility page

The complete static page is in **docs/index.html**, with local assets in
**docs/assets/** and a **docs/.nojekyll** file. No build tools or account keys
are required to serve it. The full table also works with JavaScript disabled;
JavaScript adds search, filters, printing and optional repository links.

## Enable GitHub Pages

1. Upload/commit the Repository folder's files, keeping the docs/assets paths.
2. In your GitHub repository, open **Settings → Pages**.
3. Choose **Deploy from a branch** as the source.
4. Select the branch containing the files (usually **main**) and **/docs**, then save.
5. After GitHub deploys it, use the page address shown in Pages settings. Add that
   address to the repository's About section so visitors can find the chart.

See [GitHub's publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
for current settings and deployment troubleshooting. A live page URL cannot be
provided until your repository and Pages deployment exist.

## Repository links

On a standard project URL such as account.github.io/iPod-Restore-Kit/, the page
infers its GitHub repository and enables the GitHub/Issues links. No username
is hard-coded. For a custom domain, set your real repository URL in
**docs/assets/site-config.js**. Without one, the compatibility page still works;
its direct GitHub links remain hidden.

## Maintain the chart

Edit the model rows in **docs/index.html** when implemented app paths change.
Keep the model labels, status text, row search/family attributes and filter flags
consistent. Update the displayed review date and beta version. The content is
based on app implementation, not a claim of complete device testing. Only add
hardware-validation claims after checking the matching model/format on a device.
Keep KNOWN-LIMITATIONS.md and release notes consistent with changes.

A locally opened index.html also works without a server. Publishing GitHub Pages
does not upload the beta download; keep the app ZIP attached to the GitHub release.
