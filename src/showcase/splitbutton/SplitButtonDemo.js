import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SplitButton} from '../../components/splitbutton/SplitButton';
import {Growl} from '../../components/growl/Growl';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class SplitButtonDemo extends Component {
        
    constructor() {
        super();
        this.save = this.save.bind(this);
        
        this.items = [
            {label: 'Update', icon: 'fa fa-refresh', command: (e) => {
                this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }},
            {label: 'Delete', icon: 'fa fa-close', command: (e) => {
                this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }},
            {label: 'React Website', icon: 'fa fa-link', url: 'https://facebook.github.io/react/'},
            {label: 'Upload', icon: 'fa fa-paint-brush', command:(e) => {
                window.location.hash="/fileupload"
            }}
        ];
    }
    
    save() {
        this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                    </div>
                </div>

                <div className="content-section implementation splitbutton-demo">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <h3 className="first">Basic</h3>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items}></SplitButton>

                    <h3>Severities</h3>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-secondary"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-success"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-info"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-warning"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-danger"></SplitButton>
                
                   
                </div>

                <SplitButtonDoc />
            </div>
        )
    }
}

class SplitButtonDoc extends Component {

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
import {SplitButton} from 'primereact/splitbutton';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>SplitButton has a default command button and a collection of menuitems to be displayed in an overlay.</p> 
<CodeHighlight className="language-jsx">
{`
<SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items}></SplitButton>

`}
</CodeHighlight>

                        <h3>MenuModel API</h3>
                        <p>SplitButton uses the common menumodel api to define its items, visit <Link to="/menumodel">MenuModel API</Link> for details.</p>

                        <h3>Severity</h3>
                        <p>Different color options are available to define severity levels.</p>
                        
                        <ul>
                            <li>.ui-button-secondary</li>
                            <li>.ui-button-success</li>
                            <li>.ui-button-info</li>
                            <li>.ui-button-warning</li>
                            <li>.ui-button-danger</li>
                        </ul>
<CodeHighlight className="language-jsx">
{`
<SplitButton label="Primary" />
<SplitButton label="Secondary" className="ui-button-secondary" model={this.items}/>
<SplitButton label="Success" className="ui-button-success" model={this.items}/>
<SplitButton label="Info" className="ui-button-info" model={this.items}/>
<SplitButton label="Warning" className="ui-button-warning" model={this.items}/>
<SplitButton label="Danger" className="ui-button-danger" model={this.items}/>

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
                                        <td>Identifier of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>MenuModel instance to define the overlay items.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>menuStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>menuStyleClass</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName class of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the dialog should be mounted.</td>
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
                                        <td>onClick</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke on main button.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>ui-splitbutton</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-splitbutton-button</td>
                                        <td>Dropdown button.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-menu</td>
                                        <td>Overlay menu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

export class SplitButtonDemo extends Component {
        
    constructor() {
        super();
        this.save = this.save.bind(this);
        
        this.items = [
            {label: 'Update', icon: 'fa fa-refresh', command: (e) => {
                this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }},
            {label: 'Delete', icon: 'fa fa-close', command: (e) => {
                this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }},
            {label: 'React Website', icon: 'fa fa-link', url: 'https://facebook.github.io/react/'},
            {label: 'Upload', icon: 'fa fa-paint-brush', command:(e) => {
                window.location.hash="/fileupload"
            }}
        ];
    }
    
    save() {
        this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                    </div>
                </div>

                <div className="content-section implementation splitbutton-demo">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <h3 className="first">Basic</h3>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items}></SplitButton>

                    <h3>Severities</h3>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-secondary"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-success"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-info"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-warning"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-check" onClick={this.save} model={this.items} className="ui-button-danger"></SplitButton>
                
                   
                </div>

            </div>
        )
    }
}
    
`}
</CodeHighlight>
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}