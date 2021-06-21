import ContactItem from '../ContactItem'
import { useSelector } from "react-redux";
import selectors from "../../redux/phonebook/selectors";

export default function ContactList() {
  const list = useSelector(selectors.getVisibleContacts);

  return (
    list.length > 0 && (
      <ul>
        {list.map((item) => (
          <ContactItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    )
  );
}