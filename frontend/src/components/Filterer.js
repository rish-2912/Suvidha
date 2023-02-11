const [filteredArr, setfilteredArr] = useState([])

const onChange = (value) => {
    const searchVal = value.toLowerCase();

    let regex = new RegExp(searchVal, "g");

    const byparameter = Arr.filter((Arr) => {
        if (Arr.parameter) {
        return Arr.parameter
            .toString()
            .toLowerCase()
            .match(regex);
        }
    });

    
    setfilteredArr([...new Set([ ...byparameter])]);
};