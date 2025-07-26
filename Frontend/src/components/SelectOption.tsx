type Option = {
  label: string;
  key: string;
};

type SelectOptionProps = {
  title: string;
  options: Option[];
  selected: string;
  onSelect: (key: string) => void;
};

export default function SelectOption({title, options, selected, onSelect}: SelectOptionProps){
    return(
        <div className="space-y-6 p-6 mx-auto max-w-md text-center ">
            <h2 className="text-2xl font-semibold text-base-content">{title}</h2>
            <div className="space-y-3">
                {options.map(({label, key}) => (
                    <button
                        key={key}
                        onClick={() => onSelect(key)}
                        className={`btn btn-block transition-all ${
                        selected === key ? "btn" : "btn-outline btn-primary"
                        }`}
                    > 
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}