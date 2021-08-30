import { FC } from 'react';

export type PublicFacilityData = {
  phone: string,
  name: string,
  address: {
    lines: string[],
    postalCode: string,
    township: string,
  },
  schedules: {
    days: {
      from: string,
      to: string,
    }
    hours: {
      from: string,
      to: string,
    }[]
  }[]
}

type PoliceStationCardProps = {
  facility?: PublicFacilityData
}

const FacilityCard: FC<PoliceStationCardProps> = (props) => {
  return <>
    <div className={'col'}>
      <div className="card border-secondary mb-3">
        <div className="card-header">{props.facility?.name ?? 'NOM DE l\'ETALISSEMENT'}</div>
        <div className="card-body">
          <h4 className="card-title">Téléphone : {props.facility?.phone ?? 'TELEPHONE'}</h4>
          <h6 className={'card-title'}>Adresse : </h6>
          {props.facility?.address
            ? <>
            <ul className={"list-unstyled"}>
              {props.facility.address.lines.map((line, index) => <li key={index}>{line}</li>)}
              <li key={-1}>{props.facility.address.postalCode} - {props.facility.address.township}</li>
            </ul>

            </>
            : <p> ADDRESS </p>}
          <h6 className={'card-title'}>Horaires : </h6>
          {!props.facility?.schedules || props.facility.schedules.length === 0
            ? <p>AUCUNE DONNEES</p>
            : <ul className={"mb-2"}>
              {props.facility.schedules.map((schedule, index) => {
                return <li key={index}>
                  {schedule.days.from === schedule.days.to ? `Le ${schedule.days.from}` : `Du ${schedule.days.from} au ${schedule.days.to}`} :
                  {schedule.hours.map((hours, index) => {
                    return <div key={index}>{index > 0 ? "Et de" : "De"} {hours.from} à {hours.to} </div>
                  })}
                </li>;
              })}
            </ul>
          }
        </div>
      </div>
    </div>
  </>;
};

export default FacilityCard;
