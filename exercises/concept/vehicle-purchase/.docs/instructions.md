FIXME

# Instructions

In this exercise you're going to write some code to help you help you prepare to buy a new vehicle.

You have three tasks, one to help you determine the price of the vehicle you can afford, one to determine if you will need to get a licence, and one to help you compute your registration fee.

## 1. Compute whether or not you can afford the monthly payments on a given vehicle

The transport vehicle dealers in your town are all running a five year, 0% interest promotion that you would like to take advantage of.
Implement the `canibuy(vehicle, price, monthly_budget)` function that takes the name of the vehicle you are looking at, its price, and your monthly budget and returns a string letting you know whether you can afford the vehicle or not, if the monthly payment is within 10 of your monthly budget you will want to return a special reminder to be frugal:

```julia
julia> canibuy("1974 Ford Pinto", 516, 100)
"Yes! I'm getting a 1974 Ford Pinto."

julia> canibuy("2014 Bugatti Veyron", 562_500, 5000)
"Damn! No 2014 Bugatti Veryon for me."

julia> canibuy("2020 Gazelle Medeo", 3000, 50)
"I'll have to be frugal if I want a 2020 Gazelle Medeo."
```

<!-- prettier-ignore -->
!!! info
    Numbers in Julia can contain `_` to group digits together.
    E.g. `562_500` equals `562500`.

## 2. Determine if you will need a drivers licence

If you decide to buy a car, you will require a drivers licence.
Bicycles do not require licences.
Implement the `licence(vehicle, kind)` function that takes the name of the vehicle and what kind of vehicle it is (either `"car"` or `"bike"`) and returns if you need a licence:

```julia
julia> licence("2014 Bugatti Veyron", "car")
"The 2014 Bugatti Veyron requires a licence to operate."

julia> licence("2020 Gazelle Medeo", "bike")
"The 2020 Gazelle Medeo requires no licence to operate."
```

## 3. Calculate the registration fee for your new vehicle

The registration fee for your new vehicle is based on the following formula:

- Bicycles do not need to be registered. Therefore the fee is 0€.
- For any car 10 years or older, the fee is a flat 25€.
- For any newer car:
  1. Start with a base cost that is either Manufacturer's Standard Retail Price (MSRP) for the car, or 25&nbsp;000€ whichever is greater.
  2. For each year of age, subtract 10% of the base price.
  3. Divide that value by 100. This is the registration fee you will have to pay.

Implement the `fee(msrp, age, kind)` function that takes the MSRP of the vehicle, its age in years and the kind of the vehicle (either `"car"` or `"bike"`), and returns the registration fee for that vehicle, according to the formula above.

```julia
julia> fee(562_500, 6, "car")
2250

julia> fee(25_000, 3, "car")
175

julia> fee(34_000, 30, "car")
25

julia> fee(3000, 0, "bike")
0
```
