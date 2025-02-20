import React, {Component} from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { selectTab, showTabs } from "../common/tab/tabActions"
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from "../common/tab/tabs"
import TabsHeader from "../common/tab/tabsHeader"
import TabsContent from "../common/tab/tabsContent"
import TabHeader from "../common/tab/tabHeader"
import TabContent from "../common/tab/tabContent"

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render (){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                        <tabHeader label='Listar' icon='bars' target='tabList' />
                        <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                        <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                        <tabHeader label='Excluir' icon='trash-o' target='tabDelede' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>Lista</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)