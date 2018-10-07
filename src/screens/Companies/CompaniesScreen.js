import React from 'react'
import {
  View, SectionList, RefreshControl, TextInput, Keyboard
} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import NoResultsView from '../../components/NoResultsView'
import CompanyListItem from '../../components/listItems/CompanyListItem'
import SectionHeader from '../../components/SectionHeader'
import ClearAllFiltersButtonContainer from '../../containers/ClearAllFiltersButton'

const styles = {
  content: { flex: 1 },
  searchContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingLeft: 8,
    marginVertical: 8,
    marginLeft: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  searchField: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingRight: 8,
    paddingLeft: 5,
    marginVertical: 8,
    marginRight: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  }
}

const { searchContainer, searchIconContainer, searchField } = styles
const renderSearchField = (companyList, searchCompany) => (
  <View>
    <View style={searchContainer}>
      <View style={searchIconContainer}>
        <Icon name="search" size={14} color="#ccc" />
      </View>
      <TextInput
        style={searchField}
        onChangeText={text => searchCompany(text)}
        clearButtonMode="while-editing"
        underlineColorAndroid="transparent"
        placeholder="Search company"
        placeholderTextColor="#ccc"
      />
    </View>
    {companyList.length === 0 ? <NoResultsView /> : null}
  </View>
)

const { content } = styles
const CompaniesScreen = ({
  navigation, companyList, refreshing, loadCompanies, searchCompany
}) => {
  let sections
  if (companyList.length === 0) {
    sections = [{ title: '', data: [] }]
  } else {
    sections = companyList.reduce((a, b) => {
      const item = a
      const firstLetter = b.name[0].toUpperCase()
      if (item[firstLetter]) {
        item[firstLetter].push(b)
      } else {
        item[firstLetter] = [b]
      }
      return item
    }, {})
    sections = Object.keys(sections).map(key => ({ title: key, data: sections[key] }))
  }
  return (
    <View style={content}>
      <ClearAllFiltersButtonContainer />
      {
        // TODO: temporary placement of ShowFavoritesButton component
      }
      <SectionList
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              loadCompanies()
            }}
          />
)}
        ListHeaderComponent={renderSearchField(companyList, searchCompany)}
        renderItem={({ item }) => <CompanyListItem navigation={navigation} company={item} />}
        renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
        sections={sections}
        onScrollBeginDrag={() => Keyboard.dismiss()}
      />
    </View>
  )
}

CompaniesScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  companyList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      didYouKnow: PropTypes.string.isRequired,

      employees: PropTypes.shape({
        local: PropTypes.string.isRequired,
        global: PropTypes.string.isRequired
      }).isRequired,

      weOffer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      desiredProgramme: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      desiredDegree: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      industry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

      contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
      }).isRequired,

      mapPosition: PropTypes.string.isRequired,

      logotypeUrl: PropTypes.string.isRequired,
      brochureUrl: PropTypes.string.isRequired,
      websiteUrl: PropTypes.string.isRequired,
      linkedInUrl: PropTypes.string.isRequired
    })
  ).isRequired,
  refreshing: PropTypes.bool.isRequired,
  loadCompanies: PropTypes.func.isRequired,
  searchCompany: PropTypes.func.isRequired
}

export default CompaniesScreen
