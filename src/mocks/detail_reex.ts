export const detail_reex = {
  title: 'Abonnement mobilité',
  image: 'contract/reex-abo-mobilité.svg',
  picto: 'contract/reex-abo-mobilité.svg',
  activationMethod: 'POST_OFFICE_VALIDATION',
  label: 'PAUL BLED',
  closure_reason: null,
  amended_at: null,
  status: { id: 2, type: 'CONTRACT', name: 'ACTIVATED', label: 'En cours' },
  informations: {
    begin_date: '2024-01-11T00:00:00',
    end_date: '2025-01-10T00:00:00',
    subscriber: {
      label: 'Souscripteur',
      title: 'M',
      address_label: 'Ancienne adresse',
      firstname: 'PAUL',
      lastname: 'BLED',
      line4: '18 ALLEE DE LA MADELEINE',
      line6: '92220 BAGNEUX',
      phone: '+33612345678',
      mail: 'meg.reex@yopmail.com',
    },
  },
  actions: {
    links: {
      amendment: {
        method: 'POST',
        uri: '/redirection/contracts/BGPN-RXPWRM-4NMCEP/amendment',
      },
      closure: {
        method: 'PATCH',
        uri: '/redirection/contracts/BGPN-RXPWRM-4NMCEP/closure',
      },
    },
    attributes: [
      { op: 'replace', path: '/specificData/subscriber/phoneNumber' },
      { op: 'add', path: '/specificData/beneficiaryList/-' },
      {
        op: 'add',
        path: '/specificData/redirectionList/0/beneficiaryIdList/-',
      },
      { op: 'replace', path: '/specificData/beneficiaryList/0' },
      { op: 'add', path: '/specificData/redirectionList/-' },
      {
        op: 'replace',
        path: '/specificData/marketingAgreement/hasMarketingConsent',
      },
      { op: 'replace', path: '/specificData/subscriber' },
    ],
  },
  beneficiaries: [
    {
      id: 'a5c81054-5a15-4cec-a7c2-79649fa43fb7',
      lastname: 'BLED',
      title: 'MME',
      firstname: 'Paule',
    },
  ],
  redirections: [],
  additional: { contract_id: 'BGPN-RXPWRM-4NMCEP', info: [], command: null },
  purchase: {
    merchant_id: 2,
    action: 4,
    url: '/detail/contrat/reexpedition/BGPN-RXPWRM-4NMCEP',
    date: '2024-01-11T15:41:51',
    merchant: 'Souscrit en bureau de poste, le',
    comment:
      'Pour tout renseignement complémentaire, adressez-vous au bureau de poste le plus proche.',
  },
  type: 'REEX',
  name: 'TEMPORARY_MOBILE_REDIRECTION',
  mobility_subscription: true,
};
