Introduction
============
This is the web dashboard design for Foobar++, a CPEG FYP (2020-21) to fulfill requirements for CPEG 4901. This web dashboard will mainly provide the function to edit restaurant details and to manage orders from customers. The restaurants will be allowed to edit their menu content, add things into menu and also manage stock count for food items. The restaurants will be able to pick up orders from push notifications provided by the website. As this is only a demonstration page, the implementation of the dynamic pages to view the update content has not been completed yet. This dashboard is meant to be used with Google Firestore under Google Firebase to display the dynamic contents.

Current status
--------------
[![Generic badge](https://img.shields.io/badge/Finished%20Percentage-57%20percent-%3CCOLOR%3E.svg)](https://github.com/foobar-UST/foobar-web/)
[![GitHub commits](https://img.shields.io/github/commits-since/Naereen/StrapDown.js/v1.0.0.svg)](https://github.com/foobar-UST/foobar-web/commit/)
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/foobar-UST/foobar-web/issues/)

Teammates In Charge
-------------------
Billy [@hhchanal](https://github.com/hhchanal) and Adrian [@LiquidHydroHK](https://github.com/LiquidHydroHK)

Pages intended to provide functionalities
-----------------------------------------
Completion | Current Status | Page name | Description | Person-in-charge
---------- | -------------- | --------- | ----------- | ----------------
:heavy_check_mark: | Finished, pending final edits | `index.html` | Main Dashboard Page | @LiquidHydroHK
:x: | Not completed | `orders.html` | Active order page | @hhchanal
:heavy_check_mark: | Finished | `editRest.html` | Edit restaurant details page | @LiquidHydroHK
:heavy_check_mark: | Finished | `foodItems.html` | Food items page | @hhchanal
:x: | Not completed | `menu.html` | Menu contents page | @LiquidHydroHK
:heavy_check_mark: | Finished | `stats.html` | Order statistics page | @hhchanal
:heavy_check_mark: | Finished | `ratings.html` | Ratings page | @LiquidHydroHK

Points to note for the following pages (updated on August 30th)
---------------------------------------------------------------
Page name | Remarks
--------- | -------
`index.html` | To be updated
`orders.html` | Notification table for webapp, make a table that stores information about active orders
`editRest.html` | Add functions added, pending final discussion with teammates
`foodItems.html` | Using a table on the right (5 columns space) and a details table on the left (7 columns space)
`menu.html` | To be updated
`stats.html` | ChartJS, Inline to do data representation
`ratings.html` | To be updated

Browser Support
---------------
- IE 10+
- Firefox (latest)
- Chrome (latest)
- Safari (latest)
- Opera (latest)
- Microsoft Edge (latest)

License
-------
AdminLTE is an open source project by [AdminLTE.io](https://adminlte.io) that is licensed under [MIT](http://opensource.org/licenses/MIT). AdminLTE.io
reserves the right to change the license of future releases.

Usage
=====
1. Clone the working directory to your workstation
```console
git clone https://github.com/foobar-UST/foobar-web.git
```
2. Use any of your browsers to view the HTML pages.
