import './App.css';
import Grid from './components/Grid/Grid';
import styles from './App.module.scss';

// xs - estra-pequeno
// sm - pequeno
// md - medio
// lg - grande
// xl - extra-grande

function App() {
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={8}>
        <Grid xs={12}>
          <Grid container>
            <Grid xs={12} sm={4}>
              <div className={styles.content}>ITEM 1</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2}>
          <div className={styles.content}>ITEM 2</div>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2}>
          <div className={styles.content}>ITEM 3</div>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={2}>
          <div className={styles.content}>ITEM 4</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
