# feedsort

Filter exported social media data

## Intent
User will be able to load data from Twitter or Facebook, via data download, in order to sort from oldest-to-newest, something either platform down not natively allow.
A dashboard will also be built to provide an overview of posting metrics (data points TBD).

### Process Flow
- User clicks on button to load data.
- app reads directory to compile data into a JSON file which will be saved in local storage.
- TODO: handle media attachments like images and video (Facebook only).
- TODO: determine what kind of metadata is associated with each post in order to pass to information dashboard.
- Filterable timeline of user's posts is created in the app.