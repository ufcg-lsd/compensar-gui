import { cyan, pink, lime, purple } from '@mui/material/colors';

type CompetencesColor =
  "co" |
  "an" |
  "re" |
  "de" |
  "ab" |
  "al" |
  "au" |
  "si" |
  "pa"

const competencesColor = {
  "co": "#5671A6",
  "an": "#F2506E",
  "re": "#62D98B",
  "de": "#F2506E",
  "ab": "#5671A6",
  "al": "#62D98B",
  "au": "#5671A6",
  "si": "#F2506E",
  "pa": "#62D98B",
}

const getCompetenceColor = (nameFull: string) => {
  const name = nameFull.slice(0,2).toLowerCase() as CompetencesColor;
  return competencesColor[name] || purple[800]
}


export default getCompetenceColor;