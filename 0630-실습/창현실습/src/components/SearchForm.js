import styles from '../css/searchForm.module.css';


const SearchForm = (props) => {


    return(
        <form onSubmit={props.submit} className={styles.searchForm}>
            <input 
            className={styles.inputText}
            type="text"
            value={props.text}
            onChange={props.changeText}
            placeholder={props.placeholder}
            />
            <input 
            className={styles.submitBtn}
            type= "submit" 
            value="검색"/>
        </form>
    )
}

export default SearchForm;