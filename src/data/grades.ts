/** Export grades the industry actually nominates. Typical assays, not a lab cert. */

export type Grade = {
  name: string;
  region: string;
  country: string;
  api: number;
  sulphurPct: number;
  marker: string;
  home: string;
  note: string;
};

export const GRADES: Grade[] = [
  { name: "Arab Light", region: "Middle East", country: "Saudi Arabia", api: 32.8, sulphurPct: 1.9, marker: "Oman/Dubai OSP", home: "East of Suez", note: "The Kingdom's flag. Spare lives or dies on this grade loading." },
  { name: "Murban", region: "Middle East", country: "UAE", api: 40.0, sulphurPct: 0.8, marker: "ICE Murban", home: "Asia + listed hybrid", note: "The listed UAE barrel. ADNOC's answer to Dated." },
  { name: "Basrah Medium", region: "Middle East", country: "Iraq", api: 30.0, sulphurPct: 2.6, marker: "SOMO OSP vs Oman/Dubai", home: "Asia + USGC cokers", note: "Budget oil. Loadings are the Iraqi state." },
  { name: "Kuwait Export", region: "Middle East", country: "Kuwait", api: 31.0, sulphurPct: 2.5, marker: "KPC OSP", home: "Asia", note: "Sour, steady, Future Generations Fund." },
  { name: "Iran Heavy", region: "Middle East", country: "Iran", api: 29.0, sulphurPct: 2.3, marker: "Sanctioned / unofficial", home: "Asia (constrained)", note: "A political barrel. Treat the assay as geology, the volume as policy." },
  { name: "Qatar Marine", region: "Middle East", country: "Qatar", api: 36.0, sulphurPct: 1.5, marker: "QatarEnergy", home: "Asia", note: "Condensate and LNG are the real cheque. Crude is the cousin." },
  { name: "Oman", region: "Middle East", country: "Oman", api: 33.3, sulphurPct: 1.1, marker: "Oman sour (DME)", home: "China term", note: "The sour benchmark East of Suez, with Dubai." },
  { name: "WTI Midland", region: "North America", country: "United States", api: 42.0, sulphurPct: 0.2, marker: "CME WTI", home: "USGC export", note: "The shale barrel that became an export grade." },
  { name: "WTI Cushing", region: "North America", country: "United States", api: 40.0, sulphurPct: 0.3, marker: "CL", home: "Midcon logistics", note: "The contract, not the geology." },
  { name: "WCS", region: "North America", country: "Canada", api: 20.5, sulphurPct: 3.5, marker: "WCS vs WTI", home: "USGC cokers + TMX", note: "Pipe capacity is the trade. TMX turned a stranded barrel into a traded one." },
  { name: "Maya", region: "North America", country: "Mexico", api: 22.0, sulphurPct: 3.3, marker: "Maya vs WTI/Brent", home: "USGC", note: "Pemex fiscal heavy. The USGC still wants it." },
  { name: "MARS", region: "North America", country: "United States", api: 29.0, sulphurPct: 2.0, marker: "MARS vs WTI", home: "USGC", note: "GoM sour. Selective deepwater, not shale." },
  { name: "Merey", region: "South America", country: "Venezuela", api: 16.0, sulphurPct: 2.5, marker: "Merey vs Maya", home: "USGC / Asia (sanctions-bound)", note: "Orinoco extra-heavy. Diluent and upgraders, or it does not move." },
  { name: "Liza", region: "South America", country: "Guyana", api: 32.0, sulphurPct: 0.5, marker: "Dated-linked", home: "Europe + Asia", note: "The growth grade of the Atlantic Basin. PSC profit oil." },
  { name: "Tupi / Búzios", region: "South America", country: "Brazil", api: 29.0, sulphurPct: 0.7, marker: "Dated / Ice Brent", home: "China + Europe + USGC", note: "Pre-salt cash. High-margin, not a heavy-sour dump." },
  { name: "Bonny Light", region: "Africa", country: "Nigeria", api: 35.0, sulphurPct: 0.14, marker: "Dated Brent", home: "Europe + Asia", note: "Light-sweet Atlantic. Production minus theft is the real number." },
  { name: "Saharan Blend", region: "Africa", country: "Algeria", api: 45.0, sulphurPct: 0.1, marker: "Dated Brent", home: "Med / Europe", note: "Ultra-light. Gas is still Sonatrach's bigger book." },
  { name: "Es Sider", region: "Africa", country: "Libya", api: 37.0, sulphurPct: 0.4, marker: "Dated Brent", home: "Europe", note: "The swing grade. Ports on, ports off." },
  { name: "Cabinda", region: "Africa", country: "Angola", api: 32.0, sulphurPct: 0.13, marker: "Dated Brent", home: "China + Europe", note: "FPSO decline plus tiebacks." },
  { name: "Brent / BFOE", region: "Europe", country: "UK / Norway", api: 37.5, sulphurPct: 0.4, marker: "Dated Brent / ICE", home: "The world marker", note: "Prices ~80% of globally traded crude. Volume is not the point. The marker is." },
  { name: "Johan Sverdrup", region: "Europe", country: "Norway", api: 28.0, sulphurPct: 0.7, marker: "Dated-linked", home: "NWE", note: "The last OECD West petrostate's flagship." },
  { name: "Urals", region: "Eurasia", country: "Russia", api: 31.0, sulphurPct: 1.4, marker: "Dated minus discount", home: "India + China + Med", note: "The barrel finds a home. The discount is the trade." },
  { name: "ESPO", region: "Eurasia", country: "Russia", api: 35.0, sulphurPct: 0.5, marker: "Oman/Dubai", home: "Pacific", note: "The Pacific Russian barrel." },
  { name: "CPC Blend", region: "Eurasia", country: "Kazakhstan", api: 47.0, sulphurPct: 0.5, marker: "Dated-linked", home: "Med", note: "Light, sweet, one-pipe risk." },
  { name: "Azeri BTC", region: "Eurasia", country: "Azerbaijan", api: 36.5, sulphurPct: 0.15, marker: "Dated-linked", home: "Med / Asia", note: "BTC is the pipe. Shah Deniz is the gas." },
  { name: "Tapis", region: "Asia-Pacific", country: "Malaysia", api: 46.0, sulphurPct: 0.03, marker: "Tapis / Dated", home: "Asia", note: "Light-sweet regional marker. Petronas." },
  { name: "Minas", region: "Asia-Pacific", country: "Indonesia", api: 35.0, sulphurPct: 0.1, marker: "ICP", home: "Asia", note: "Mature PSC. Duri is the heavy twin." },
  { name: "Daqing", region: "Asia-Pacific", country: "China", api: 33.0, sulphurPct: 0.1, marker: "Domestic", home: "China", note: "Does not change the import bid. It floors it." },
  { name: "Cossack / NW Shelf", region: "Oceania", country: "Australia", api: 47.0, sulphurPct: 0.04, marker: "Dated / Tapis", home: "Asia", note: "Condensate side-stream on an LNG contract. Do not pair-trade it with WTI." },
];

export const GRADE_NOTE =
  "Typical published assays, rounded. Nomination quality varies by cargo. Differentials move; the API and sulphur do not, unless the blend does. Sour USGC cokers want Maya, Merey, Castilla, Basrah. Complex Asian plants want Murban and ESPO. Light-sweet Atlantic still substitutes for lost Russian product yield.";

export function gradesByRegion(region: string) {
  return GRADES.filter((g) => g.region === region);
}
