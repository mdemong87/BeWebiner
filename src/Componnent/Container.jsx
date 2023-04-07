export default function Container({children}) {


const styles={
    width:"90%",
    margin:"auto",
}



  return (
    <div style={styles}>{children}</div>
  )
}
