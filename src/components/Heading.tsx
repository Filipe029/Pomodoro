import styles from './Heading.module.css';
export function Heading(props attr={123}) {
  console.log(props);
  return <h1 className={styles.heading}> {props.children} </h1>;
}
