type ListProps<T> = {
  listItems: T[];
  renderItem: (listItem: T) => React.ReactNode;
};
const List = <T extends {}>({ listItems, renderItem }: ListProps<T>) => {
  return (
    <ul>
      {listItems.map((item, index) => {
        return <li key={index}>{renderItem(item)}</li>;
      })}
    </ul>
  );
};
export default List;

// type ListProps<T> = {
//   listItems: T[];
//   renderItem: (listItem: T) => React.ReactNode;
// };
// const List = <T,>({ listItems, renderItem }: ListProps<T>) => {
//   return (
//     <ul>
//       {listItems.map((item, index) => {
//         return <li key={index}>{renderItem(item)}</li>;
//       })}
//     </ul>
//   );
// };
// export default List;
