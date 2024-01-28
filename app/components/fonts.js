import { Exo_2 } from "next/font/google"
import { Poppins } from "next/font/google"

export const exo = Exo_2({ 
    weight: ['400','500','700'],
    subsets: ['latin'],
    display: 'swap'
})

export const poppins = Poppins({ 
    weight: ['100','300','500','700','900'],
    subsets: ['latin'],
    display: 'swap'
})