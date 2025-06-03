import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import style from "./ListBox.module.scss";
import { classNames } from "../../utils/classNames";
import { ArrowUpAccordSvg } from "../../assets/svg/ArrowUpAccordSvg/ArrowUpAccordSvg";
import { CheckedSvg } from "../../assets/svg/CheckedSvg/CheckedSvg";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
} from "@floating-ui/react";

interface ListBoxItem {
  id: string;
  value: string;
  content: ReactNode;
  disabled?: boolean;
  img?: string;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  hiddenArrow?: boolean;
  onChange?: (value: string) => void;
}

function ListBox(props: ListBoxProps) {
  const { className = "", items, value, defaultValue, onChange } = props;
  const selectedItem = items?.find((item) => item.value === value);

  const { x, y, refs, strategy } = useFloating({
    placement: "bottom-end",
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return (
    <Listbox
      as={"div"}
      className={classNames(style.listbox, {}, [className])}
      value={value}
      onChange={onChange}
    >
      <ListboxButton className={style.trigger} ref={refs.setReference}>
        {({ open }) => (
          <>
            {selectedItem ? (
              <img src={selectedItem.img} alt={selectedItem.value} />
            ) : (
              defaultValue
            )}
            <span className={style.boxArrow}>
              <ArrowUpAccordSvg
                className={classNames(
                  style.arrowSlideSvg,
                  { [style.open]: open },
                  []
                )}
              />
            </span>
          </>
        )}
      </ListboxButton>
      <ListboxOptions
        ref={refs.setFloating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          width: "156px",
        }}
        className={classNames(style.options, {}, ["app_modal"])}
      >
        {items?.map((item) => (
          <ListboxOption
            key={item.id}
            disabled={item.disabled}
            value={item.value}
            as={Fragment}
          >
            {({ focus, selected }) => (
              <li
                className={classNames(style.item, {
                  [style.active]: selected ? false : focus,
                  [style.disabled]: item.disabled,
                  [style.select]: selected,
                })}
              >
                {item.img && (
                  <img className={style.img} src={item.img} alt={item.value} />
                )}
                <p className={style.descr}>{item.content}</p>
                {selected && <CheckedSvg className={style.checkedSvg} />}
              </li>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ListBox;
