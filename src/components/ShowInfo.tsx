type ShowInfoProps = {
    name: string;
}

const ShowInfo = (props: ShowInfoProps) =>{
    // props tham số
    return <div>
        {props.name}

    </div>
};
export default ShowInfo;    