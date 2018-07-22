import React, {Component} from 'react';
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SidebarDemo extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop:false, 
            visibleBottom: false,
            visibleFullScreen:false
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Sidebar</h1>
                        <p>Sidebar is a panel component displayed as an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                        <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => this.setState({visibleRight: false})}>
                        <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleRight: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleRight: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={() => this.setState({visibleTop: false})}>
                        <h1 style={{fontWeight:'normal'}}>Top Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleTop: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleTop: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({visibleBottom: false})}>
                        <h1 style={{fontWeight:'normal'}}>Bottom Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleBottom: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleBottom: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleFullScreen} fullScreen={true} baseZIndex={1000000} onHide={() => this.setState({visibleFullScreen: false})}>
                        <h1 style={{fontWeight:'normal'}}>Full Screen Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleFullScreen: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleFullScreen: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Button icon="pi pi-arrow-right" onClick={() => this.setState({visibleLeft:true})} />
                    <Button icon="pi pi-arrow-left" onClick={() => this.setState({visibleRight:true})} />
                    <Button icon="pi pi-arrow-down" onClick={() => this.setState({visibleTop:true})} />
                    <Button icon="pi pi-arrow-up" onClick={() => this.setState({visibleBottom:true})} />
                    <Button icon="pi pi-th-large" onClick={() => this.setState({visibleFullScreen:true})} />
                </div>

                <SidebarDoc/>

            </div>
        )
    }
}

class SidebarDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Sidebar} from 'primereact/sidebar';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Sidebar is used as a container and visibility is controlled with visible property.</p>

                        <CodeHighlight className="language-jsx">
                            {`

<Sidebar visible={this.state.visible} onHide={ () => this.setState({visible:false}) }>
    Content
</Sidebar>

<Button icon="pi pi-arrow-right" onClick={ () => this.setState({visible:true}) }/>

`}
                        </CodeHighlight>

                        <h3>Position</h3>
                        <p>Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the position property.</p>

                        <CodeHighlight className="language-javascript">
                            {`
<Sidebar visible={this.state.visible} position="right" onHide={ () => this.setState({visible:false}) }>
    Content
</Sidebar>

`}
                        </CodeHighlight>

                        <h3>Size</h3>
                        <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visible} position="right" style={{width:'30em'}} onHide={ () => this.setState({visible:false}) }></Sidebar>
<Sidebar visible={this.state.visible} position="right" className="ui-sidebar-sm" onHide={ () => this.setState({visible:false}) }</Sidebar>
<Sidebar visible={this.state.visible} position="right" className="ui-sidebar-md" onHide={ () => this.setState({visible:false}) }></Sidebar>
<Sidebar visible={this.state.visible} position="right" className="ui-sidebar-lg" onHide={ () => this.setState({visible:false}) }></Sidebar>

`}
                        </CodeHighlight>

                        <h3>Full Screen</h3>
                        <p>Full screen mode allows the sidebar to cover whole screen.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Sidebar visible={this.state.visible} fullScreen={true} onHide={ () => this.setState({visible:false}) }>
    Content
</Sidebar>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>visible</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies the visibility of the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>position</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Specifies the position of the sidebar, valid values are "left" and "right".</td>
                                    </tr>
                                    <tr>
                                        <td>fullScreen</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Adds a close icon to the header to hide the dialog.</td>
                                    </tr>
                                    <tr>
                                        <td>blockScroll</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to block scrolling of the document when sidebar is active.</td>
                                    </tr>
                                    <tr>
                                        <td>baseZIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Base zIndex value to use in layering.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onHide</td>
                                        <td>event: Event object</td>
                                        <td>Callback to invoke when sidebar is hidden (Required).</td>
                                    </tr>
                                    <tr>
                                        <td>onShow</td>
                                        <td>event: Event object</td>
                                        <td>Callback to invoke when sidebar is showed.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ui-sidebar</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-left</td>
                                        <td>Container element of left sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-right</td>
                                        <td>Container element of right sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-top</td>
                                        <td>Container element of top sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-bottom</td>
                                        <td>Container element of bottom sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-full</td>
                                        <td>Container element of a full screen sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-active</td>
                                        <td>Container element when sidebar is visible.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-close</td>
                                        <td>Close anchor element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-sm</td>
                                        <td>Small sized sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-md</td>
                                        <td>Medium sized sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-lg</td>
                                        <td>Large sized sidebar.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-sidebar-mask</td>
                                        <td>Modal layer of the sidebar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/sidebar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {Sidebar} from "primeng/components/sidebar/Sidebar";
import {Button} from 'primeng/components/button/Button';

export class SidebarDemo extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop:false, 
            visibleBottom: false,
            visibleFullScreen:false
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Sidebar</h1>
                        <p>Sidebar is a panel component displayed as an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                        <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleLeft: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => this.setState({visibleRight: false})}>
                        <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleRight: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleRight: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={() => this.setState({visibleTop: false})}>
                        <h1 style={{fontWeight:'normal'}}>Top Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleTop: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleTop: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({visibleBottom: false})}>
                        <h1 style={{fontWeight:'normal'}}>Bottom Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleBottom: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleBottom: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Sidebar visible={this.state.visibleFullScreen} fullScreen={true} baseZIndex={1000000} onHide={() => this.setState({visibleFullScreen: false})}>
                        <h1 style={{fontWeight:'normal'}}>Full Screen Sidebar</h1>
                        <Button type="button" onClick={() => this.setState({visibleFullScreen: true})} label="Save" className="ui-button-success"/>
                        <Button type="button" onClick={() => this.setState({visibleFullScreen: true})} label="Cancel" className="ui-button-secondary"/>
                    </Sidebar>
                    
                    <Button icon="pi pi-arrow-right" onClick={() => this.setState({visibleLeft:true})} />
                    <Button icon="pi pi-arrow-left" onClick={() => this.setState({visibleRight:true})} />
                    <Button icon="pi pi-arrow-down" onClick={() => this.setState({visibleTop:true})} />
                    <Button icon="pi pi-arrow-up" onClick={() => this.setState({visibleBottom:true})} />
                    <Button icon="pi pi-th-large" onClick={() => this.setState({visibleFullScreen:true})} />
                </div>

                <SidebarDoc/>

            </div>
        )
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}