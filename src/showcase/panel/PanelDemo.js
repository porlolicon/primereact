import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Panel} from '../../components/panel/Panel';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class PanelDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Panel</h1>
                        <p>Panel is a grouping component providing with content toggle feature.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Panel header="Godfather I">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>

                     <Panel header="Godfather I" style={{marginTop:'2em'}} toggleable={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>
                </div>
                <PanelDoc></PanelDoc>
            </div>
        )
    }
}

export class PanelDoc extends Component {

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
import {Panel} from 'primereact/panel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Panel is defined with Panel element.</p>
<CodeHighlight className="language-jsx">
{`
<Panel header="Godfather I">
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Panel>

`}
</CodeHighlight>

             <h3>Toggleable</h3>
            <p>Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option.</p>
<CodeHighlight className="language-jsx">
{`
<Panel header="Godfather I" style={{marginTop:'2em'}} toggleable={true}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Panel>

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
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Header text of the panel.</td>
                        </tr>
                        <tr>
                            <td>toggleable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if content of panel can be expanded and collapsed.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>collapsed</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines the initial state of panel content, supports one or two-way binding as well.</td>
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
                            <td>onCollapse</td>
                            <td>event.originalEvent: browser event </td>
                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                        </tr>
                        <tr>
                            <td>onExpand</td>
                            <td>event.originalEvent: browser event </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
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
                            <td>ui-panel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-panel-titlebar</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>ui-panel-title</td>
                            <td>Title text of panel.</td>
                        </tr>
                        <tr>
                            <td>ui-panel-titlebar-toggler</td>
                            <td>Toggle icon.</td>
                        </tr>
                        <tr>
                            <td>ui-panel-content</td>
                            <td>Content of panel.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/panel" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
export class PanelDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Panel</h1>
                        <p>Panel is a grouping component providing with content toggle feature.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Panel header="Godfather I">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>

                     <Panel header="Godfather I" style={{marginTop:'2em'}} toggleable={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>
                </div>
                <PanelDoc></PanelDoc>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}