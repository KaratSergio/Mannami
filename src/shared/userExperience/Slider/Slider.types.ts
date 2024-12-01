export interface SliderProps<T> {
  items: [T, ...T[]];
  renderItem: (item: T) => React.ReactNode;
  itemsToShow?: number;
  className?: string;
}
