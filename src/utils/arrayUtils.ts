type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id);
};

/* Testing code:
const itemsWithoutId = [ { label: "test" }]
findItemIndexById(itemsWithoutId, "tii")
*/

export const removeItemAtIndex = <TItem extends Item>(
  items: TItem[],
  index: number
) => [...items.slice(0, index), ...items.slice(index + 1)];

export const insertItemAtIndex = <TItem extends Item>(
  items: TItem[],
  item: TItem,
  index: number
) => [...items.slice(0, index), item, ...items.slice(index)];

export const moveItem = <TItem extends Item>(
  items: TItem[],
  from: number,
  to: number
) => {
  const item = items[from];
  return insertItemAtIndex(removeItemAtIndex(items, from), item, to);
};
