import { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

interface IListProps {
  data: any[];
  renderType: string;
  renderItem: (item: any) => JSX.Element;
}

const List = ({ data = [], renderType, renderItem }: IListProps) => {
  const [visibleItems, setVisibleItems] = useState(renderType === "doctor" ? 6 : data.length);

  const handleLoadMore = () => {
    setVisibleItems((prev: number) => prev + 6);
  };

  const generateLink = (item: { id: any }) => {
    if (renderType === "doctor") {
      return `/doctors/detail?doctorId=${item.id}`;
    } else if (renderType === "clinic") {
      return `/clinics/detail?clinicId=${item.id}`;
    }
    return "#";
  };

  return (
    <div>
      <div className={styles.list}>
        {Array.isArray(data) && data.slice(0, visibleItems).map((item, index) => (
          <Link to={generateLink(item)} key={index} className={styles.item}>
            {renderItem(item)}
          </Link>
        ))}
      </div>
      {renderType === "doctor" && visibleItems < data.length && (
        <div className={styles.btn}>
          <button style={{ backgroundColor: "blue" }} onClick={handleLoadMore}>
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
