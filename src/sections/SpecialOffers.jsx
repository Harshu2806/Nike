import { offer } from "../assets/images"; 
import Button from "../components/Button"; 
import {arrowRight} from "../assets/icons";    

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flec-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full "/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 text-4xl capitalize font-palanquin  font-bold lg:max-wlg"> 
      <span className="text-coral-red"> Special </span> Offer

        </h2>
        <p className="mt-4 max-w-lg info-text">
          Embark on ashopping journey that redefines your experience with unbeatable deals. From premier selection to incredible savings, we offer unparelleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigates a realm of possibilities designed to fulfill your desires, surpassing the lofiest expectation. Your journey with us is nothing short of exceptional.</p>

        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" iconURL={arrowRight} />
        <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"
        />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
