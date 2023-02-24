// Write your code here
import './index.css'

const EventItem = props => {
  const {EventItemData, settingActiveId, isActive} = props
  const {imageUrl, name, location, id} = EventItemData
  const OnClickImage = () => {
    settingActiveId(id)
  }

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'
  return (
    <li className="list-item">
      <button type="button" className="image-button" onClick={OnClickImage}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="title1">{name}</p>
      <p className="description1">{location}</p>
    </li>
  )
}

export default EventItem
