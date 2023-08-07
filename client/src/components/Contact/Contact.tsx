import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

type Props = {}

const style = {
  wrapper: `w-full h-[1000px] lg:h-[500px] bg-white px-[--root-margin] flex flex-col lg:flex-row gap-4`,
  mapContainer: `h-full flex flex-col justify-center max-w-[100%] lg:max-w-[48%] w-full`,
  map: `w-full`,
}

const Map = (props: Props) => {
  return (
    <article id="contact" className={style.wrapper}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '100%',
          '@media(min-width:1280px)': { maxWidth: '50%' },
        }}>
        <Card style={{ boxShadow: 'none' }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              style={{
                fontWeight: 'bold',
                fontSize: 40,
                color: 'var(--primary-color)',
              }}>
              Liên Hệ
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
              style={{ paddingBottom: '2rem' }}>
              Vui lòng để lại tin nhắn. Chúng tôi sẽ liên hệ lại ngay trong
              ngày.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Nhập họ tên"
                    label="Họ tên của bạn"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Nhập email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Nội dung"
                    multiline
                    rows={4}
                    placeholder="Vui lòng để lại lời nhắn..."
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: 'var(--primary-color)!important',
                      '&:hover': {
                        backgroundColor: 'var(--secondary-color)!important',
                      },
                    }}>
                    Gửi tin nhắn
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <div className={style.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.4938073833873!2d106.71567147584535!3d10.696343260664063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317530014549fe19%3A0x13c633424308925c!2zQ-G7rEEgSMOATkcgxJBJ4buGTiBOxq_hu5pDIEhPw4BORyBRVUFORw!5e0!3m2!1sen!2s!4v1689093796684!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={style.map}></iframe>
      </div>
    </article>
  )
}

export default Map;
