export const configuration = {
  data: {
    claim_status: true,
    copyright: "© La Poste 2022",
    shippedBy: "Expédié par",
    cart: "cart",
    backlink: {
      label: "Retour vers laposte.fr",
      url: "https://www.laposte.fr",
    },
    preference: {
      title: "Gérer les paramètres",
      trackingAuto: {
        title: "Ajout automatique",
        text: "Afficher les courriers/colis des achats réalisés depuis nos sites e-commerce partenaires (ex. : Fnac, Zalando…)",
        verif:
          "Pour bénéficier de cet ajout automatique, vous devez vérifier l'email de votre compte.",
        redirectLabel: "Vérifier mon email",
      },
      error:
        "La fonctionnalité d'ajout automatique n'est pas disponible actuellement. Veuillez réessayer ultérieurement.",
    },
    sections: [
      {
        name: "tracking",
        title: "Mes suivis",
        link_label: "Voir tous mes suivis",
        button_label: "Suivre un envoi ou une livraison",
        text: "Suivez l’avancement de vos lettres/colis envoyés et de vos livraisons.",
      },
      {
        name: "shopping",
        title: "Mes achats",
        link_label: "Voir tous mes achats",
        button_label: "Accéder à la boutique",
        text: "Suivez vos achats de timbres, lettres et enveloppes effectués depuis la boutique.",
        date_label_singular: "Achat du",
        date_label_plural: "Achats du",
        see_more_label: "Afficher plus",
        see_less_label: "Afficher moins",
      },
      {
        name: "contract",
        title: "Mes contrats",
      },
      {
        name: "trackingPro",
        title: "Vos suivis",
        link_label: "Voir tous vos suivis",
        button_label: "Suivre un envoi ou une livraison",
        text: "Suivez l’avancement de vos lettres/colis envoyés et de vos livraisons.",
      },
    ],
    dashboard: {
      userCard: {
        name: "userCard",
        label: "Bonjour ##USERNAME##, bienvenue sur votre tableau de bord",
        company: "Entreprise Dupont SARL",
        isCertified: "true",
        cta: {
          id: "manageProfileCTA",
          action: "redir",
          label: "Gérer votre Compte Pro",
          url: "",
          color: "",
        },
      },
      kpiMyShipments: {
        title: "Vos suivis",
        subTitle: "En tant qu'expéditeur",
      },
      kpiMyReceptions: {
        title: "Vos suivis",
        subTitle: "En tant que destinataire",
      },
      kpiMyPurchases: {
        title: "Vos commandes",
        subTitle: "En ligne",
        label: "En cours de préparation",
      },
      contactCard: {
        name: "contactCard",
        title: {
          label: "Nous contacter",
          url: "https://aide.laposte.fr/professionnel",
        },
        text: `Pour plus d'informations, consultez notre <a href="https://aide.laposte.fr/professionnel">Foire Aux Questions</a> ou <a href="https://aide.laposte.fr/professionnel#inbenta-contact">contactez-nous</a> par téléphone, e-mail ou courrier.`,
      },
      shortcuts: [
        {
          name: "shortcutLettre",
          label: "Envoyer un courrier",
          url: "/professionnel/mon-timbre-en-ligne",
        },
        {
          name: "shortcutColis",
          label: "Envoyer un colis",
          url: "/professionnel/colissimo-en-ligne",
        },
        {
          name: "shortcutTimbre",
          label: "Envoyer un recommandé",
          url: "/professionnel/lettre-recommandee-en-ligne",
        },
      ],
    },
    shoppingPro: {
      shoppingErrorMessage:
        "Certains de vos achats peuvent ne pas apparaître. Nous mettons tout en œuvre pour rétablir la situation dans les meilleurs délais. Merci de votre compréhension.",
      hasCommandsHistoryMessage: {
        messageText: "Seuls les achats en ligne depuis",
        withNbMonths: true,
        nbMonths: 18,
        secondMessageText: "apparaissent dans cette liste.",
        thirdMessageText: "Si vous recherchez une commande plus ancienne,",
        lastMessageText: "merci de ",
        linkText: "contacter La Poste",
        linkUrl: "https://aide.laposte.fr/professionnel#inbenta-contact",
        subMessage: ".",
      },
      hasnotCommandsHistoryMessage: {
        messageText:
          "Vous n’avez pas effectué d’achat sur les 18 derniers mois.",
        secondMessageText: "Si vous recherchez une commande plus ancienne,",
        lastMessageText: "merci de ",
        linkText: "contacter La Poste",
        linkUrl: "https://aide.laposte.fr/professionnel#inbenta-contact",
        subMessage: ".",
      },
      paginationNbCommands: 4,
    },
    colissimo: {
      title: "Comment expédier votre Colissimo ?",
      paragraphs: [
        {
          bubbleIndex: 1,
          subTitle: "Imprimer votre étiquette",
          part: [
            {
              partSubTitle: "Depuis chez vous :",
              partText:
                "le fichier à télécharger est au format PDF, vous pouvez l’ouvrir en utilisant Adobe Reader.",
              partLink: "",
            },
            {
              partSubTitle: "Depuis un bureau de poste : ",
              partText: `vous pouvez imprimer gratuitement l'étiquette, dans certains bureaux de poste, depuis un automate en utilisant le numéro de votre colis ou le code de retrait <p style="font-size: 14px;">##WITHDRAWELCODE##</p>.`,
              partLink: "En savoir plus sur le code de retrait",
              partLinkUrl:
                "https://aide.laposte.fr/contenu/ou-et-comment-deposer-mon-colissimo?t=cc",
            },
          ],
        },
        {
          bubbleIndex: 2,
          subTitle: "Coller votre étiquette sur votre colis",
          part: [
            {
              partSubTitle: "",
              partText: "L’étiquette doit être collée à plat sur le colis. ",
              partLink: "",
              partLinkUrl: "",
            },
            {
              partSubTitle: "",
              partText:
                "Le code barre doit rester bien lisible (même du scotch transparent peut gêner la lecture du code).",
              partLink: "Comment placer l’étiquette ?",
              partLinkUrl:
                "https://aide.laposte.fr/contenu/comment-acheter-et-imprimer-une-etiquette-colissimo?t=cc",
            },
          ],
        },
        {
          bubbleIndex: 3,
          subTitle: "Déposer le colis dans votre boîte aux lettres",
          part: [
            {
              partSubTitle: "",
              partText: `Le colis doit être déposé dans votre boîte aux lettres <p style="font-size: 12px; ">le ##PICKINGDATE## avant ##DATEMAXPICKINGHOUR## du matin.</p> Votre facteur le récupère dans la journée et vous dépose un avis de prise en charge.`,
              partLink: "",
            },
            {
              partSubTitle: "",
              partText: `En cas de problème, vous pouvez aussi le déposer en <a href="https://localiser.laposte.fr/"> point de contact La Poste</a> avant le ##LABELMAXVALIDITYDATE##.`,
              partLink: "",
            },
          ],
        },
      ],
      D_BP: {
        subTitle: "Déposer le colis dans un point de contact La Poste",
        partText: `Trouvez le <a href="https://localiser.laposte.fr/"> point de contact La Poste</a> le plus proche de chez vous pour déposer votre colis.`,
      },
      messageBox: {
        messageTitle: "Délai de remboursement",
        messageText:
          "Vous serez remboursé dans un délai de 8 jours ouvrables maximum après votre demande. Vous recevrez un email de confirmation lorsque le remboursement aura été effectué.",
      },
    },
    invoicesPro: {
      titleText: "Vos Factures",
      invoicesTableDate: "Date",
      invoicesTableNum: "Numéro",
      invoiceDownloadText: "Télécharger la facture",
      invoicesTableBuyingChannel: "CANAL d’achat",
      invoicesTablePaymentMode: "Mode de réglement",
      invoicesTableAmount: "Montant",
      invoicesTableAmountTTC: "montant TTC",
      invoicesTableActions: "actions",
      invoiceEmptyTitle: "Aucune facture",
      invoiceEmptyTextFirst:
        "Vos factures s’afficheront ici après avoir passé une commande",
      invoiceEmptyTextSecond: ", point de vente ou par téléphone",
      invoiceEmptyImageText: "Image du cas 0 facture",
      invoiceDownloadTextCta: "downloadInvoice",
      invoiceDownloadMobileText: "DownloadMobile",
      popUpContextualDescription:
        "Les factures et avoirs des produits vendus via la Marketplace La Poste ne sont pas dans l'Espace client. En cas de besoin contactez le vendeur.",
      hasInvoicesHistoryMessage: {
        messageText: "Seules les factures depuis",
        withNbMonths: true,
        nbMonths: 18,
        secondMessageText: "apparaissent dans cette liste. ",
        thirdMessageText:
          "Si vous recherchez une facture plus ancienne ou que l’une de vos factures n’apparait pas, ",
        lastMessageText: "merci de ",
        linkText: "contacter La Poste",
        linkUrl:
          "https://aide.laposte.fr/professionnel/telephone/service-commande",
        subMessage: ".",
      },
      hasnotInvoicesHistoryMessage: {
        messageText:
          "Vous n’avez pas de facture émise sur les 18 derniers mois.",
        secondMessageText:
          "Si vous recherchez une facture plus ancienne ou que l’une de vos factures n’apparait pas, ",
        lastMessageText: "merci de ",
        linkText: "contacter La Poste",
        linkUrl:
          "https://aide.laposte.fr/professionnel/telephone/service-commande",
        subMessage: ".",
      },
      paginationNbInvoices: 20,
      contextualInvoiceMessage:
        "Retrouvez ici les factures et avoirs des commandes ou des contrats La Poste.",
      blueboxInvoiceTitle: "Informations",
      blueboxInvoiceLinkLabel: "certifier le compte.",
      blueboxInvoiceLink: "https://certificationcomptepro.laposte.fr/",
      blueboxInvoiceSubTitle:
        "Vous souhaitez également retrouver vos factures émises en point de vente ou par téléphone ?",
      blueboxInvoiceDescription: "Pour cela, vous devez",
      futureInvoicePopInDescription:
        "Cette ligne correspond à <br /> votre consommation <br /> effectuée le mois dernier en paiement différé.<strong>Votre <br /> facture sera émis au maximum dans 5 premiers jours ouvrés </strong> du mois. <br /><br />",
      futurePdiffPopInDescription:
        "Votre consommation est<br /><strong>  valable jusqu’au</strong><br /><strong>##LASTDAYOFCURRENTMONTH##</strong><br />Après cette date, votre consommation sera<strong>  remise à 0 €.</strong><br />",
      toastSuccessDownloadMessage: "Téléchargement réussi",
      toastErrorDowloadMessage:
        "Le téléchargement a échoué. Veuillez réessayer dans quelques minutes",
    },
    pdiffPro: {
      contractDetails: {
        subMessage:
          "Votre société ne répond plus aux critères d'éligibilité pour ce contrat.",
      },
    },
    appointmentsPro: {
      resume: {
        title: "Vos rendez-vous",
        text: "Retrouvez et gérez vos rendez-vous en bureau de poste.",
        cta: {
          url: "https://rendezvous.laposte.fr/navigation/index.html?coderegate=930480&canal=NEC&typologieClient=PRO",
          label: "Prendre rendez-vous",
        },
      },
      upcoming: {
        subTitle: "À venir",
        url: "https://dvp-slot-1-dvp-sdev.paas-03.build.net.intra.laposte.fr",
        info: "Veuillez vérifier la liste des documents à apporter le jour de votre rendez-vous. Vous les trouverez dans le détail de vos rendez-vous.",
      },
      emptyState: {
        subTitle: "Aucun rendez-vous planifié",
        text: "Prenez rendez-vous dès maintenant pour gagner du temps.",
        cta: {
          url: "https://rendezvous.laposte.fr/navigation/index.html?coderegate=930480&canal=NEC&typologieClient=PRO",
          label: "Prendre rendez-vous",
        },
      },
      contact: {
        firstSentence: {
          firstSentencePart1: "Seuls les rendez-vous pris depuis",
          withNbMonths: true,
          nbMonths: 12,
          firstSentencePart2: "apparaissent dans cette liste.",
        },
        secondSentence: {
          text: "Si vous recherchez un rendez-vous plus ancien ou que l’un de vos rendez-vous n’apparait pas, merci de ",
          linkText: "contacter La Poste",
          linkUrl: "https://aide.laposte.fr/professionnel/#inbenta-contact",
          dot: ".", //ajoute un point à la fin de la phrase
        },
      },
    },
    appointmentsPart: {
      resume: {
        title: "Mes rendez-vous",
        text: "Retrouvez et gérez vos rendez-vous en bureau de poste.",
        cta: {
          url: "https://rendezvous.laposte.fr/navigation/index.html?coderegate=930480&canal=NEC&typologieClient=PART",
          label: "Prendre rendez-vous",
        },
      },
      upcoming: {
        subTitle: "À venir",
        url: "https://dvp-slot-1-dvp-sdev.paas-03.build.net.intra.laposte.fr",
        info: "Veuillez vérifier la liste des documents à apporter le jour de votre rendez-vous. Vous les trouverez dans le détail de vos rendez-vous.",
      },
      emptyState: {
        subTitle: "Aucun rendez-vous planifié",
        text: "Prenez rendez-vous dès maintenant pour gagner du temps.",
        cta: {
          url: "https://rendezvous.laposte.fr/navigation/index.html?coderegate=930480&canal=NEC&typologieClient=PART",
          label: "Prendre rendez-vous",
        },
      },
      contact: {
        firstSentence: {
          firstSentencePart1: "Seuls les suivis datant de moins de",
          withNbMonths: false,
          nbMonths: 12,
          firstSentencePart2:
            "12 mois apparaissent dans cette liste. Les plus anciens sont automatiquement supprimés.",
        },
        secondSentence: {
          text: "Vous ne trouvez toujours pas votre rendez-vous ?",
          linkText: "Contacter La Poste",
          linkUrl: "https://aide.laposte.fr/#inbenta-contact",
          dot: "", //ajoute un point à la fin de la phrase
        },
      },
    },
    navigation: {
      navigationHeader: {
        navigationHeaderButtonLabel: "Aller sur laposte.fr",
        navigationHeaderLinkLabel: "laposte.fr",
      },
      navigationItems: [
        {
          icon: "home",
          id: "sp-home",
          label: "Tableau de bord",
          path: "/",
          configWebana: "accueil",
        },
        {
          icon: "tracking",
          id: "sp-envois",
          label: "Suivis",
          path: "/suivis/expeditions",
          configWebana: "suivis",
        },
        {
          icon: "shopping",
          id: "sp-achats",
          label: "Commandes",
          path: "/achats",
          configWebana: "achats",
        },
        {
          icon: "invoice",
          id: "sp-factures",
          label: "Factures",
          path: "/factures", // TODO: à confirmer dans les tickets
          configWebana: "factures",
        },
        {
          icon: "complaint",
          id: "sp-contrats",
          label: "Contrats",
          url: "/professionnel/espaceclient/contrats",
          configWebana: "contrats",
          externalLink: true,
        },
        {
          icon: "proxy",
          id: "sp-procurations",
          label: "Procurations",
          url: "/professionnel/espaceclient/procurations",
          externalLink: true,
          configWebana: "procurations",
        },
        // {
        //     icon: 'appointment',
        //     id: 'sp-rdv',
        //     label: 'Rendez-vous',
        //     path: '/rdv',
        //     configWebana: 'rdv',
        // },
        {
          icon: "favorite",
          id: "sp-favorites",
          label: "Favoris",
          url: "/professionnel/espaceclient/favoris",
          externalLink: true,
          configWebana: "favoris",
        },
        {
          icon: "fid",
          id: "sp-fid",
          label: "Mes Points Fidélité",
          // url: 'laposte.mespointsfidelite.fr',
          externalLink: true,
          fid: true,
          configWebana: "fidélité",
          secondIcon: "external",
        },
      ],
      navigationFooter: {
        navigationFooterCloseLabel: "Réduire le menu",
        navigationFooterCloseLabelHover: "Garder le menu ouvert",
      },
    },
    contractPro: {
      alert: {
        title: "Dans quel cas La Poste peut suspendre mon service ?",
        listElement: [
          "Incident de paiement",
          "Perte de la certification",
          "Annulation d’une autorisation de prélèvement",
        ],
        text: "<p>Pour obtenir plus d’informations, merci de contacter <b>le Service client : au 3634</b>, du lundi au vendredi de 9h à 18h (appel non surtaxé, hors surcoût éventuel selon opérateur).</p>",
      },
      header: {
        title: "Vos contrats",
        subtitle:
          "Retrouvez ici vos contrats et les services que vous avez souscrits auprès de La Poste.",
      },
      footer: {
        message:
          "<p>Si vous recherchez un contrat plus ancien ou que l’un de vos contrats n’apparait pas, merci de <a href='https://aide.laposte.fr/professionnel'>contacter La Poste.</a></p>",
      },
    },
  },
};
