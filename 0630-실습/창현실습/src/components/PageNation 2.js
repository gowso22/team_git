import styles from '../css/pagenation.module.css'


const PageNation = (props) => {

    return(
        <nav>
        <ul>
          {
            props.Nums.map((number) => (
              <li key={number}>
                <button
                 className={styles.numBtn}
                 onClick={()=>props.setPage(number)}>{number}</button>
              </li>
            ))
          }
        </ul>
      </nav>
    )
}

export default PageNation;