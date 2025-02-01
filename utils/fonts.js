import { Instrument_Serif, Instrument_Sans } from "next/font/google"

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weights: ["300", "400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
})

