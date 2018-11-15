import {Switch, Route} from 'react-router-dom';
import React from 'react';
import {withRouter} from 'react-router-dom';
import DesktopPage from './pages/DesktopPage';
import LandingPage from './pages/LandingPage';
import FolderPage from './pages/FolderPage';
import TemplatePage from './pages/TemplatePage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';

import Layout from './layouts/Layout';
import LayoutMain from './layouts/LayoutMain';


class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    withLayout(Child) {
        return (props) => (
            <Layout>
                <Child />
            </Layout>
        )
    }

    withLayoutMain(Child) {
        return (props) => (
            <LayoutMain>
                <Child />
            </LayoutMain>
        )
    }

    render() {
        return  (
            <Switch>
                <Route exact path="/" component={this.withLayoutMain(LandingPage)}/>
                <Route exact path="/home" component={this.withLayout(DesktopPage)}/>
                <Route exact path="/newsfeed" component={this.withLayout(GalleryPage)}/>
                <Route exact path="/folder/:folderId" component={this.withLayout(FolderPage)}/>
                <Route exact path="/template/:templateId" component={TemplatePage} />
                <Route path="/" component={this.withLayout(NotFoundPage)}></Route>
            </Switch>
        )
    }
}

export default withRouter(Routes);
