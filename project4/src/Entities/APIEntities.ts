export type APIFacility = {
  type: string;
  features?: (Features)[] | null;
}
export type Features = {
  type: string;
  geometry: Geometry;
  properties: Properties;
}
export type Geometry = {
  type: string;
  coordinates?: (number)[] | null;
}
export type Properties = {
  id: string;
  codeInsee: string;
  pivotLocal: string;
  nom: string;
  adresses?: (Adresses)[] | null;
  horaires?: (Schedule)[] | null;
  email: string;
  telephone: string;
  url: string;
  zonage: Zoning;
}
export type Adresses = {
  type: string;
  lignes?: (string)[] | null;
  codePostal: string;
  commune: string;
  coordonnees?: (number)[] | null;
}
export type Schedule = {
  du: string;
  au: string;
  heures?: (Hours)[] | null;
}
export type Hours = {
  de: string;
  a: string;
}
export type Zoning = {
  communes?: (string)[] | null;
}
