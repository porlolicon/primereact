import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProgressBar} from '../../components/progressbar/ProgressBar';
import {Growl} from '../../components/growl/Growl';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class ProgressBarDemo extends Component {

    constructor() {
        super();
        this.state = {value1: 0, value2: 50};
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            var val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;
            if(val >= 100) {
                val = 100;
                this.growl.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
                clearInterval(this.interval);
            }
            this.setState({value1: val});
        }, 2000);
    }

    componentWillUnmount () {
        this.interval && clearInterval(this.interval);
        this.interval = false;
    }


    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ProgressBar</h1>
                        <p>ProgressBar is a process status indicator</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <h3>Dynamic</h3>
                    <ProgressBar value={this.state.value1}></ProgressBar>

                    <h3>Static</h3>
                    <ProgressBar value={this.state.value2}></ProgressBar>

                    <h3>Indeterminate</h3>
                    <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
                </div>
                <ProgressBarDoc></ProgressBarDoc>
            </div>
        );
    }
}

export class ProgressBarDoc extends Component {

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
import {ProgressBar} from 'primereact/progressbar';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>ProgressBar has two modes; "determinate" and "indeterminate". ProgressBar requires a value between 0 and 100 to display the progress.</p>
<CodeHighlight className="language-jsx">
{`
<ProgressBar value={this.state.value1}></ProgressBar>

`}
</CodeHighlight>
                        <p>Indeterminate has no such a requirement and is simple enabled using mode property.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<ProgressBar mode="indeterminate"></ProgressBar>

`}
                        </CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {value1: 0, value2: 50};
}

componentDidMount() {
    this.interval = setInterval(() => {
        var val = this.state.value1;
        val += Math.floor(Math.random() * 10) + 1;
        if(val >= 100) {
            val = 100;
            this.growl.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
            clearInterval(this.interval);
        }
        this.setState({value1: val});
    }, 2000);
}

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
                            <td>value</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Current value of the progress.</td>
                        </tr>
                        <tr>
                            <td>showValue</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Show or hide progress bar value.</td>
                        </tr>
                        <tr>
                            <td>unit</td>
                            <td>string</td>
                            <td>%</td>
                            <td>Unit sign appended to the value.</td>
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
                            <td>mode</td>
                            <td>string</td>
                            <td>determinate</td>
                            <td>Defines the mode of the progress, valid values are "determinate" and "indeterminate".</td>
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
                            <td>ui-progressbar</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-progressbar-determinate</td>
                            <td>Container element of a determinate progressbar.</td>
                        </tr>
                        <tr>
                            <td>ui-progressbar-indeterminate</td>
                            <td>Container element of an indeterminate progressbar.</td>
                        </tr>
                        <tr>
                            <td>ui-progressbar-value</td>
                            <td>Element whose width changes according to value.</td>
                        </tr>
                        <tr>
                            <td>ui-progressbar-label</td>
                            <td>Label element that displays the current value.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/progressbar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
export class ProgressBarDemo extends Component {

    constructor() {
        super();
        this.state = {value1: 0, value2: 50};
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            var val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;
            if(val >= 100) {
                val = 100;
                this.growl.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
                clearInterval(this.interval);
            }
            this.setState({value1: val});
        }, 2000);
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>ProgressBar</h1>
                        <p>ProgressBar is a process status indicator</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <h3>Dynamic</h3>
                    <ProgressBar value={this.state.value1}></ProgressBar>

                    <h3>Static</h3>
                    <ProgressBar value={this.state.value2}></ProgressBar>

                    <h3>Indeterminate</h3>
                    <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
                </div>
                <ProgressBarDoc></ProgressBarDoc>
            </div>
        );
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