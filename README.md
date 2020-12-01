# SimpliFix

Simplifix is an intermediary app where users can find and hire freelance contractors for labor-based work by browsing through posted 'gigs' as well as post their own gigs to gain clients if they possess skills in a particular area. Categories of work include, but are not limited to, plumbing, electrical, landscaping, hardwood flooring, and interior design. The platform manages all bookings and payments, and allows for live messaging between clients and contractors.

This repo is the front-end of Simplifix, which was built using React and Material UI.
The back-end repo can be found [here](https://github.com/shadeemerhi/simplifix-api) and was built using Node.js and Express in combination with PostgreSQL.

The front-end has been deployed to Netlify and the live site can be found [here](https://mystifying-albattani-f243f1.netlify.app/). The back-end is being hosted by Heroku.

Built by: Shadee Merhi, Calvin Zheng and Tom Adam.

## Final Product

### Home page

!["Home page"](https://github.com/shadeemerhi/simplifix/blob/master/docs/home.png)

### Gigs page

!["Browsing gigs"](https://github.com/shadeemerhi/simplifix/blob/master/docs/gigs.png)

### Individual Gig details

!["Individual Gig details"](https://github.com/shadeemerhi/simplifix/blob/master/docs/gig.png)

### Live messaging between clients and contractors (Socket IO Implementation)

!["Live messaging between clients and contractors"](https://github.com/shadeemerhi/simplifix/blob/master/docs/messaging.gif)

### Placing a booking

!["Placing a booking"](https://github.com/shadeemerhi/simplifix/blob/master/docs/booking.gif)

### Booking confirmation (left is Client, right is Contractor, Socket IO Implementation)

!["Booking confirmation"](https://github.com/shadeemerhi/simplifix/blob/master/docs/bookingconfirm.gif)

### After the Gig completion, the Contractor can specify hours (left is Client, right is Contractor)

!["Specifying hours worked"](https://github.com/shadeemerhi/simplifix/blob/master/docs/hours.gif)

### Payments with Stripe

!["Payments with Stripe"](https://github.com/shadeemerhi/simplifix/blob/master/docs/payment.gif)

### Order history after payment has been received

!["Order history after payment has been received"](https://github.com/shadeemerhi/simplifix/blob/master/docs/paymentdone.png)

### New Gig form

!["Creating a new Gig"](https://github.com/shadeemerhi/simplifix/blob/master/docs/newgig.png)

## Dependencies

- React.js
- Node.js
- Express
- Socket.io
- Stripe
- Material-UI
- cookie-session

## Stripe cards

Payment succeeds: 4242 4242 4242 4242

Payment requires authentication: 4000 0025 0000 3155

Payment is declined: 4000 0000 0000 9995

## Cypress testing

command: ./node_modules/.bin/cypress open

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
