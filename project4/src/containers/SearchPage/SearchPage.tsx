import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import SelectSearchItems from '../../components/SelectSearchItems/SelectSearchItems';
import Title from '../../components/Title/Title';
import { APIFacility } from '../../Entities/APIEntities';
import FacilityCard, { PublicFacilityData } from './FacilityCard/FacilityCard';

type SearchPageProps = {}

const API_BASE_URL = 'https://etablissements-publics.api.gouv.fr/v3/departements/09/';
const API_ITEMS = {
  policeStation: 'commissariat_police',
  cityHall: 'mairie',
  jobCenter: 'pole_emploi',
  prefecture: 'prefecture',
};

const SearchPage: FC<SearchPageProps> = () => {
  const [facilities, setFacilities] = useState<PublicFacilityData[]>([]);
  const [item, setItem] = useState<string>(API_ITEMS.prefecture);

  useEffect(() => {
    axios.get(`${API_BASE_URL}${item}`)
      .then(({ data }: { data: APIFacility }) => {
        console.log(data.features);
        const handledData = data.features?.map((it) => {
          const addressObj = it.properties.adresses ? it.properties.adresses[0] : undefined;
          const address = {
            lines: addressObj?.lignes ?? [],
            postalCode: addressObj?.codePostal ?? "",
            township: addressObj?.commune ?? "",
          };
          return {
            phone: it.properties.telephone,
            name: it.properties.nom,
            address: address,
            schedules: (it.properties.horaires ?? []).map((schedule) => ({
              days: {
                from: schedule.du,
                to: schedule.au,
              },
              hours: schedule.heures?.map((hours) => ({ from: hours.de, to: hours.a })) ?? [],
            })),
          };
        }) ?? []
        console.log(handledData);
        setFacilities(handledData);
      })
      .catch((e) => console.log(e));
  }, [item]);

  return <div className={'container'}>
    <Title className={'mt-2 mb-2'}>Rechercher un établissement : </Title>
    <SelectSearchItems apiItems={API_ITEMS} setFilterFn={setItem} />
    <div className={'row mt-2'}>
      {facilities.map((facility, index) => {
        return <div key={index} className={'col-6'}><FacilityCard facility={facility}/></div>
      })}
    </div>
  </div>;
};

export default SearchPage;
