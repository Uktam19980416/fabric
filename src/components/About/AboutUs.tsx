import { FC } from 'react'
import image from '../../assets/images/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png'

export const AboutUs: FC = () => {
  return (
    <div className="container w-full max-w-[1440px] mx-auto px-2 rounded-3xl mt-10">
      <div className="grid grid-cols-2 gap-5 items-center max-lg:grid-cols-1">
        <div>
          <h2 className="text-3xl font-extrabold">Bukhara Natural</h2>
          <h4 className="text-3xl font-extrabold">Product</h4>
          <p className="text-lg max-iphone:text-sm">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory
            has been a company that produces cotton fabrics for use all over the
            world for many years.
            <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company
            has been serving customers for 17 years.
            <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main
            goal of this company is to produce high quality and cost effective
            products. 
            <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe
            production process of this company is completely environmentally
            friendly.
            <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company
            can produce any types of cotton raw materials according to the
            requirements and suggestions of customers. <br />
            
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company
            is the official dealer of DongJia weaving machines in Uzbekistan.{' '}
            <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently,
            more than 80 families contribute to the prestige and success of the
            company by providing financially for their families. 
            <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this
            demand, 50 looms are running at high speed, non-stop. <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the
            capacity to weave 200-250,000 meters of fabric per month. <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn
            accordance with the high demand of our customers, the company has
            now launched the production of high-quality premium eco-bags. <br />
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara
            Natural Product Company is pleased to serve its loyal customers at
            any time. <br />
          </p>
        </div>

        <div className="w-full">
          <img className="w-full object-cover" src={image} alt="Business People" />
        </div>
      </div>
    </div>
  )
}
