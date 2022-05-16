import {
  RiStarFill,
  RiStarHalfFill,
  RiStarLine
} from "react-icons/ri";

function ProductPage() {
  const img = "https://i.guim.co.uk/img/media/03ac0259bc751c9b186d9f5f71cefd36b051ae76/0_198_2254_2060/master/2254.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=61543c2dff47983f5550cdc2aeab42cb"
  return (
    <>

      <div className='d-flex'>
        <div className=" w-100 d-flex flex-direction-column-sm justify-content-center align-items-center">
          <div className="w-md-50 w-100 p-5">
            <img src={img} className="mw-100"></img>
          </div>
          <div className="w-md-50 w-100 bg-light h-100 p-5 mt-5">
            <div className="w-full d-flex flex-direction-column align-items-center">
              <h2 className="text-center">Protein Shake</h2>
              <h3 className="text-center"> Protein shake jordgubsmak </h3>
              <div className="d-flex w-full justify-content-center pt-3">
                <RiStarFill size={30} />
                <RiStarFill size={30} />
                <RiStarFill size={30} />
                <RiStarHalfFill size={30} />
                <RiStarLine size={30} />
              </div>
              <p className="pt-3">
                Core Whey Protein™ är ett högkvalitativt vassleprotein med BCAA.
                Proteinpulvret är framtaget för dig som vill berika din kost med ett
                riktigt bra protein för effektiv återhämtning och muskeluppbyggnad.
                Core Whey Protein är baserat på mjölk och det ger dig ett snabbupptagligt
                proteinpulver med låg fetthalt och lågt innehåll av laktos. Flera otroligt
                goda smaker och även i lättsötade alternativ samt en naturell utan sötning.
                <ul>
                  <li> 75-80 % protein beroende på smak {"("}se tabell längst ned på sidan{")"} </li>
                  <li> Ultrafiltrerat vassleprotein </li>
                  <li> Finns även i lättsötade varianter </li>
                  <li> Låglaktos vassleprotein - 0,7 g laktos per dl färdig dryck </li>
                  <li> Rik på BCAA </li>
                  <li> Förser kroppen med snabbt byggnadsmaterial </li>
                  <li> Finns i många otroligt goda smaker </li>
                  <li> Ett naturellt alternativ utan sötningsmedel </li>
                </ul>
                Drick en portion upp till tre gånger dagligen, som mellanmål och efter
                träning. Oavsett om du vill bygga upp din fysik eller om du strävar efter
                en viktnedgång, lämpar sig Core Whey Protein™ för dig och din målsättning.
              </p>
              <button className="btn btn-outline-secondary w-75"> Lägg till Varukorgen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
