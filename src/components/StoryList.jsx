import React, { Component } from "react";
import axios from 'axios'
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";


class StoryList extends Component{
    constructor (props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://royalreader.pythonanywhere.com/story/stories')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
      const {posts} = this.state

      return (
        <Container sx={{ flexGrow: 1, pt:"20px" }}>
          <Grid container spacing={2}>
            {
              posts.length?
              posts.map( posts => 
                <Grid item xs={6} sm={3}>
                <Card  sx={{ maxWidth: 345 }}>
                  <CardActionArea href={'#'}>
                    <CardMedia
                      component="img"
                      height="140"
                      src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom  component="div" key={posts.id}>
                      Title: {posts.title}
                      </Typography>
                      <Typography gutterBottom  component="div" key={posts.id}>
                      By: {posts.author}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              
                </Grid>
              ):
              null
              
            }
            
          </Grid>
      
        </Container>
      )
        
    }
}

export default StoryList;
