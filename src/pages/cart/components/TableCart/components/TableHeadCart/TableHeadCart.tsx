import classes from "./TableHeadCart.module.scss";

interface Props {
    headers: string[];
}

export default function TableHeadCart({headers}: Props) {
    return (
        <thead className={classes["table-head"]}>
            <tr className={classes["table-row"]}>
                {headers.map((header, index) => 
                    <th className={classes["table-item"]} key={index}>
                        {header}
                    </th>
                )}
            </tr>
        </thead>
    )
}