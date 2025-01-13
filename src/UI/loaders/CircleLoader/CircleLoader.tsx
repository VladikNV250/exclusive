import classes from "./CircleLoader.module.scss";

interface Props {
    loading: boolean,
}

export default function CircleLoader({loading}: Props) {
    if (loading) return <div className={classes["loader"]} />        
}