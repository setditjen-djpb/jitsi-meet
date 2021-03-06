/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars, no-var */

var config = {
    // Connection
    //

    hosts: {
        // XMPP domain.
        domain: 'meet.setditjen-djpb.net',

        // When using authentication, domain for guest users.
        anonymousdomain: 'guest.meet.setditjen-djpb.net',

        // Domain for authenticated users. Defaults to <domain>.
        // authdomain: 'auth.meet.setditjen-djpb.net',

        // Jirecon recording component domain.
        // jirecon: 'jirecon.meet.setditjen-djpb.net',

        // Call control component (Jigasi).
        // call_control: 'callcontrol.meet.setditjen-djpb.net',

        // Focus component domain. Defaults to focus.<domain>.
        // focus: 'focus.meet.setditjen-djpb.net',

        // XMPP MUC domain. FIXME: use XEP-0030 to discover it.
        muc: 'conference.meet.setditjen-djpb.net'
    },

    // BOSH URL. FIXME: use XEP-0156 to discover it.
    bosh: '//meet.setditjen-djpb.net/http-bind',

    // Websocket URL
    websocket: 'wss://meet.setditjen-djpb.net/xmpp-websocket',

    // The name of client node advertised in XEP-0115 'c' stanza
    clientNode: 'http://jitsi.org/jitsimeet',

    // The real JID of focus participant - can be overridden here
    // focusUserJid: 'focus@auth.meet.setditjen-djpb.net',


    // Testing / experimental features.
    //

    testing: {
        // P2P test mode disables automatic switching to P2P when there are 2
        // participants in the conference.
        p2pTestMode: false,

    	// capScreenshareBitrate: 1,
    	octo: {
        	probability: 1
   		 }

        // Enables the test specific features consumed by jitsi-meet-torture
        // testMode: false

        // Disables the auto-play behavior of *all* newly created video element.
        // This is useful when the client runs on a host with limited resources.
        // noAutoPlayVideo: false
    },

    // Disables ICE/UDP by filtering out local and remote UDP candidates in
    // signalling.
    // webrtcIceUdpDisable: true,

    // Disables ICE/TCP by filtering out local and remote TCP candidates in
    // signalling.
    // webrtcIceTcpDisable: false,


    // Media
    //
    // eslint-disable-next-line camelcase
    etherpad_base: 'https://wbo.ophir.dev/boards/',

    // Audio
    disableDeepLinking: true,

    // Disable measuring of audio levels.
    disableAudioLevels: true,

    // audioLevelsInterval: 200,
    forceJVB121Ratio: -1,

    // Enabling this will run the lib-jitsi-meet no audio detection module which
    // will notify the user if the current selected microphone has no audio
    // input and will suggest another valid device if one is present.
    enableNoAudioDetection: true,

    // Enabling this will run the lib-jitsi-meet noise detection module which will
    // notify the user if there is noise, other than voice, coming from the current
    // selected microphone. The purpose it to let the user know that the input could
    // be potentially unpleasant for other meeting participants.
    enableNoisyMicDetection: true,

    // Start the conference in audio only mode (no video is being received nor
    // sent).
    // startAudioOnly: false,

    // Every participant after the Nth will start audio muted.
    // startAudioMuted: 9,
    // startVideoMuted: 9,
    // Start calls with audio muted. Unlike the option above, this one is only
    // applied locally. FIXME: having these 2 options is confusing.
    // startWithAudioMuted: false,

    // Enabling it (with #params) will disable local audio output of remote
    // participants and to enable it back a reload is needed.
    // startSilent: false

    // Sets the preferred target bitrate for the Opus audio codec by setting its
    // 'maxaveragebitrate' parameter. Currently not available in p2p mode.
    // Valid values are in the range 6000 to 510000
    // opusMaxAverageBitrate: 20000,

    // Enables redundancy for Opus
    // enableOpusRed: false

    // Video

    // Sets the preferred resolution (height) for local video. Defaults to 720.
    // enableScreenshotCapture: false,
    resolution: 360,
    maxFps: 30,
    constraints: {
     		video: {
         		aspectRatio: 16 / 9,
         	height: {
             		ideal: 360,
             		max: 480,
             		min: 240
            }
     	}
    },

    // How many participants while in the tile view mode, before the receiving video quality is reduced from HD to SD.
    // Use -1 to disable.
    // maxFullResolutionParticipants: 2,

    disableSimulcast: false,

    enableLayerSuspension: false,
    feedbackPercentage: 0,

    // Every participant after the Nth will start video muted.
    // startVideoMuted: 10,

    // Start calls with video muted. Unlike the option above, this one is only
    // applied locally. FIXME: having these 2 options is confusing.
    // startWithVideoMuted: false,

    // If set to true, prefer to use the H.264 video codec (if supported).
    // Note that it's not recommended to do this because simulcast is not
    // supported when  using H.264. For 1-to-1 calls this setting is enabled by
    // default and can be toggled in the p2p section.
    // This option has been deprecated, use preferredCodec under videoQuality section instead.
    // preferH264: true,

    // If set to true, disable H.264 video codec by stripping it out of the
    // SDP.
    disableH264: true,

    // Desktop sharing

    // The ID of the jidesha extension for Chrome.
    desktopSharingChromeExtId: null,

    // Whether desktop sharing should be disabled on Chrome.
    // desktopSharingChromeDisabled: false,

    // The media sources to use when using screen sharing with the Chrome
    // extension.
    desktopSharingChromeSources: [ 'screen', 'window', 'tab' ],

    // Required version of Chrome extension
    desktopSharingChromeMinExtVersion: '0.1',

    // Whether desktop sharing should be disabled on Firefox.
    // desktopSharingFirefoxDisabled: false,

    // Optional desktop sharing frame rate options. Default value: min:5, max:5.
    desktopSharingFrameRate: {
        min: 5,
        max: 5
    },

    // Try to start calls with screen-sharing instead of camera video.
    // startScreenSharing: false,

    // Specify the settings for video quality optimizations on the client.
    // videoQuality: {
    //    // Provides a way to prevent a video codec from being negotiated on the JVB connection. The codec specified
    //    // here will be removed from the list of codecs present in the SDP answer generated by the client. If the
    //    // same codec is specified for both the disabled and preferred option, the disable settings will prevail.
    //    // Note that 'VP8' cannot be disabled since it's a mandatory codec, the setting will be ignored in this case.
    //    disabledCodec: 'H264',
    //
    //    // Provides a way to set a preferred video codec for the JVB connection. If 'H264' is specified here,
    //    // simulcast will be automatically disabled since JVB doesn't support H264 simulcast yet. This will only
    //    // rearrange the the preference order of the codecs in the SDP answer generated by the browser only if the
    //    // preferred codec specified here is present. Please ensure that the JVB offers the specified codec for this
    //    // to take effect.
    //    preferredCodec: 'VP8',
    //
    //    // Provides a way to configure the maximum bitrates that will be enforced on the simulcast streams for
    //    // video tracks. The keys in the object represent the type of the stream (LD, SD or HD) and the values
    //    // are the max.bitrates to be set on that particular type of stream. The actual send may vary based on
    //    // the available bandwidth calculated by the browser, but it will be capped by the values specified here.
    //    // This is currently not implemented on app based clients on mobile.
    //    maxBitratesVideo: {
    //        low: 200000,
    //        standard: 500000,
    //        high: 1500000
    //    },
    //
    //    // The options can be used to override default thresholds of video thumbnail heights corresponding to
    //    // the video quality levels used in the application. At the time of this writing the allowed levels are:
    //    //     'low' - for the low quality level (180p at the time of this writing)
    //    //     'standard' - for the medium quality level (360p)
    //    //     'high' - for the high quality level (720p)
    //    // The keys should be positive numbers which represent the minimal thumbnail height for the quality level.
    //    //
    //    // With the default config value below the application will use 'low' quality until the thumbnails are
    //    // at least 360 pixels tall. If the thumbnail height reaches 720 pixels then the application will switch to
    //    // the high quality.
    //    minHeightForQualityLvl: {
    //        360: 'standard,
    //        720: 'high'
    //    }
    // },

    // Recording
    // Whether to enable file recording or not.
    fileRecordingsEnabled: true,
    liveStreamingEnabled: false,
    hiddenDomain: 'recorder.meet.setditjen-djpb.net',

    // Enable the dropbox integration.
    // dropbox: {
    //     appKey: '<APP_KEY>' // Specify your app key here.
    //     // A URL to redirect the user to, after authenticating
    //     // by default uses:
    //     // 'https://meet.setditjen-djpb.net/static/oauth.html'
    //     redirectURI:
    //          'https://meet.setditjen-djpb.net/subfolder/static/oauth.html'
    // },
    // When integrations like dropbox are enabled only that will be shown,
    // by enabling fileRecordingsServiceEnabled, we show both the integrations
    // and the generic recording service (its configuration and storage type
    // depends on jibri configuration)
    // fileRecordingsServiceEnabled: false,
    // Whether to show the possibility to share file recording with other people
    // (e.g. meeting participants), based on the actual implementation
    // on the backend.
    // fileRecordingsServiceSharingEnabled: false,

    // Whether to enable live streaming or not.
    // liveStreamingEnabled: false,

    // Transcription (in interface_config,
    // subtitles and buttons can be configured)
    // transcribingEnabled: false,

    // Enables automatic turning on captions when recording is started
    // autoCaptionOnRecord: false,

    // Misc

    // Default value for the channel "last N" attribute. -1 for unlimited.

    channelLastN: 10,

    // Provides a way to use different "last N" values based on the number of participants in the conference.
    // The keys in an Object represent number of participants and the values are "last N" to be used when number of
    // participants gets to or above the number.
    //
    // For the given example mapping, "last N" will be set to 20 as long as there are at least 5, but less than
    // 29 participants in the call and it will be lowered to 15 when the 30th participant joins. The 'channelLastN'
    // will be used as default until the first threshold is reached.
    //
    // lastNLimits: {
    //     5: 20,
    //     30: 15,
    //     50: 10,
    //     70: 5,
    //     90: 2
    // },

    minHDHeight: 480,
    startBitrate: '128',
    useRtcpMux: true,
    useBundle: true,
    disableSuspendVideo: true,
    stereo: false,
    disableAP: false,
    disableAEC: false,

    // disableNS: true,
    // disableAGC: true,
    // disableHPF: true,
    // Disables or enables RTX (RFC 4588) (defaults to false).
    disableRtx: false,

    // Disables or enables TCC (the default is in Jicofo and set to true)
    // (draft-holmer-rmcat-transport-wide-cc-extensions-01). This setting
    // affects congestion control, it practically enables send-side bandwidth
    // estimations.
    enableTcc: true,

    // Disables or enables REMB (the default is in Jicofo and set to false)
    // (draft-alvestrand-rmcat-remb-03). This setting affects congestion
    // control, it practically enables recv-side bandwidth estimations. When
    // both TCC and REMB are enabled, TCC takes precedence. When both are
    // disabled, then bandwidth estimations are disabled.
    enableRemb: true,

    // Enables ICE restart logic in LJM and displays the page reload overlay on
    // ICE failure. Current disabled by default because it's causing issues with
    // signaling when Octo is enabled. Also when we do an "ICE restart"(which is
    // not a real ICE restart), the client maintains the TCC sequence number
    // counter, but the bridge resets it. The bridge sends media packets with
    // TCC sequence numbers starting from 0.
    // enableIceRestart: true,

    // Defines the minimum number of participants to start a call (the default
    // is set in Jicofo and set to 2).
    // minParticipants: 2,

    // Use XEP-0215 to fetch STUN and TURN servers.
    useStunTurn: true,

    // Enable IPv6 support.
    useIPv6: false,

    // Enables / disables a data communication channel with the Videobridge.
    // Values can be 'datachannel', 'websocket', true (treat it as
    // 'datachannel'), undefined (treat it as 'datachannel') and false (don't
    // open any channel).
    openBridgeChannel: 'websocket', // true,


    // UI
    //

    // Hides lobby button
    // hideLobbyButton: false,

    // Require users to always specify a display name.
    requireDisplayName: true,

    // Whether to use a welcome page or not. In case it's false a random room
    // will be joined when no room is specified.
    enableWelcomePage: true,

    // Enabling the close page will ignore the welcome page redirection when
    // a call is hangup.
    // enableClosePage: false,

    // Disable hiding of remote thumbnails when in a 1-on-1 conference call.
    // disable1On1Mode: false,

    // Default language for the user interface.
    defaultLanguage: 'en',

    // If true all users without a token will be considered guests and all users
    // with token will be considered non-guests. Only guests will be allowed to
    // edit their profile.
    enableUserRolesBasedOnToken: false,

    // Whether or not some features are checked based on token.
    enableFeaturesBasedOnToken: false,

    // Enable lock room for all moderators, even when userRolesBasedOnToken is enabled and participants are guests.
    // lockRoomGuestEnabled: false,

    // When enabled the password used for locking a room is restricted to up to the number of digits specified
    // roomPasswordNumberOfDigits: 10,
    // default: roomPasswordNumberOfDigits: false,

    // Message to show the users. Example: 'The service will be down for
    // maintenance at 01:00 AM GMT,
    // noticeMessage: 'DJPb Meeting beta version',

    // Enables calendar integration, depends on googleApiApplicationClientID
    // and microsoftApiApplicationClientID
    // enableCalendarIntegration: true,
    // googleApiApplicationClientID: "762766970689-95ad7o34k5m5daceqb16e7s8qv8nu9sb.apps.googleusercontent.com",
    // googleApiApplicationClientID: "762766970689-j04sal4l2as6hqb3g5lrjeos1t1dtqhc.apps.googleusercontent.com",
    // microsoftApiApplicationClientID: "00000000-0000-0000-0000-000040240063",
    // enableCalendarIntegration: true,
    // When 'true', it shows an intermediate page before joining, where the user can  configure its devices.
    prejoinPageEnabled: true,

    // Whether to automatically copy invitation URL after creating a room.
    // Document should be focused for this option to work
    // enableAutomaticUrlCopy: false,

    // Stats
    //

    // Whether to enable stats collection or not in the TraceablePeerConnection.
    // This can be useful for debugging purposes (post-processing/analysis of
    // the webrtc stats) as it is done in the jitsi-meet-torture bandwidth
    // estimation tests.
    // gatherStats: false,

    // The interval at which PeerConnection.getStats() is called. Defaults to 10000
    // pcStatsInterval: 15000,

    // To enable sending statistics to callstats.io you must provide the
    // Application ID and Secret.
    callStatsID: '344193559',
    callStatsSecret: 'oUaCvtgbU6qu:NPnPdbvTd+kwHY/Q0cgVCHxgDz6Lmiq/2DhjJtZHRl8=',

    // enables sending participants display name to callstats
    // enableDisplayNameInStats: false,

    // enables sending participants email if available to callstats and other analytics
    // enableEmailInStats: false,

    // Privacy
    //

    // If third party requests are disabled, no other server will be contacted.
    // This means avatars will be locally generated and callstats integration
    // will not function.
    // disableThirdPartyRequests: false,


    // Peer-To-Peer mode: used (if enabled) when there are just 2 participants.
    //

    p2p: {
        enabled: false,
        useStunTurn: true,
        stunServers: [

            { urls: 'stun:meet.setditjen-djpb.net:443' },
            { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' }
        ],

        // iceTransportPolicy: 'all',
        preferH264: true,
        disableH264: true

        // backToP2PDelay: 10
    },

    analytics: {
        // googleAnalyticsTrackingId: 'G-1PHWN7S5X5',

        // The Amplitude APP Key:
        amplitudeAPPKey: '08d9760dede15bbb4ca036ef8b99567b'

        // Configuration for the rtcstats server:
        // By enabling rtcstats server every time a conference is joined the rtcstats
        // module connects to the provided rtcstatsEndpoint and sends statistics regarding
        // PeerConnection states along with getStats metrics polled at the specified
        // interval.
        // rtcstatsEnabled: true,

        // In order to enable rtcstats one needs to provide a endpoint url.
        // rtcstatsEndpoint: wss://rtcstats-server-pilot.jitsi.net/,

        // The interval at which rtcstats will poll getStats, defaults to 1000ms.
        // If the value is set to 0 getStats won't be polled and the rtcstats client
        // will only send data related to RTCPeerConnection events.
        // rtcstatsPolIInterval: 1000
        // Array of script URLs to load as lib-jitsi-meet "analytics handlers".
        // scriptURLs: [
        // "libs/analytics-ga.min.js", // google-analytics
        //      "https://example.com/my-custom-analytics.js"
        // ],
    },

    // Information about the jitsi-meet instance we are connecting to, including
    // the user region as seen by the server.
    deploymentInfo: {
        environment: 'meet-setditjen-djpb-net',
        envType: 'prod',

        // shard: "dcBudut",
        // region: "Kanpus",
        // userRegion: "regionDJPB"
        userRegion: 'regionDJPB'
    },

    // disableRecordAudioNotification: false,

    // Information for the chrome extension banner
    // chromeExtensionBanner: {
    //     // The chrome extension to be installed address
    //     url: 'https://chrome.google.com/webstore/detail/jitsi-meetings/kglhbbefdnlheedjiejgomgmfplipfeb',

    //     // Extensions info which allows checking if they are installed or not
    //     chromeExtensionsInfo: [
    //         {
    //             id: 'kglhbbefdnlheedjiejgomgmfplipfeb',
    //             path: 'jitsi-logo-48x48.png'
    //         }
    //     ]
    // },

    // Local Recording
    //

    localRecording: {
        enabled: true,
        format: 'flac'
    },

    e2eping: {
        pingInterval: -1,
        analyticsInterval: -1
    },

    // NOTE: This option is experimental and is currently intended for internal
    // use only.
    // _desktopSharingSourceDevice: 'sample-id-or-label',

    // If true, any checks to handoff to another application will be prevented
    // and instead the app will continue to display in the current browser.
    // disableDeepLinking: false,

    // A property to disable the right click context menu for localVideo
    // the menu has option to flip the locally seen video for local presentations
    disableLocalVideoFlip: true,

    // Mainly privacy related settings

    // Disables all invite functions from the app (share, invite, dial out...etc)
    // disableInviteFunctions: true,

    // Disables storing the room name to the recents list
    // doNotStoreRoom: true,

    // Deployment specific URLs.
    // deploymentUrls: {
    //    // If specified a 'Help' button will be displayed in the overflow menu with a link to the specified URL for
    //    // user documentation.
    //    userDocumentationURL: 'https://docs.example.com/video-meetings.html',
    //    // If specified a 'Download our apps' button will be displayed in the overflow menu with a link
    //    // to the specified URL for an app download page.
    //    downloadAppsUrl: 'https://docs.example.com/our-apps.html'
    // },

    // Options related to the remote participant menu.
    // remoteVideoMenu: {
    //     // If set to true the 'Kick out' button will be disabled.
    //     disableKick: true
    // },

    // If set to true all muting operations of remote participants will be disabled.
    // disableRemoteMute: true,

    // List of undocumented settings used in jitsi-meet
    /**
     _immediateReloadThreshold
     autoRecord
     autoRecordToken
     debug
     debugAudioLevels
     deploymentInfo
     dialInConfCodeUrl
     dialInNumbersUrl
     dialOutAuthUrl
     dialOutCodesUrl
     disableRemoteControl
     displayJids
     etherpad_base
     externalConnectUrl
     firefox_fake_device
     googleApiApplicationClientID
     iAmRecorder
     iAmSipGateway
     microsoftApiApplicationClientID
     peopleSearchQueryTypes
     peopleSearchUrl
     requireDisplayName
     tokenAuthUrl
     */

    /**
     * This property can be used to alter the generated meeting invite links (in combination with a branding domain
     * which is retrieved internally by jitsi meet) (e.g. https://meet.jit.si/someMeeting
     * can become https://brandedDomain/roomAlias)
     */
    // brandingRoomAlias: null,

    // List of undocumented settings used in lib-jitsi-meet
    /**
     _peerConnStatusOutOfLastNTimeout
     _peerConnStatusRtcMuteTimeout
     abTesting
     avgRtpStatsN
     callStatsConfIDNamespace
     callStatsCustomScriptUrl
     desktopSharingSources
     disableAEC
     disableAGC
     disableAP
     disableHPF
     disableNS
     enableLipSync
     enableTalkWhileMuted
     forceJVB121Ratio
     hiddenDomain
     ignoreStartMuted
     nick
     startBitrate
     */


    // Allow all above example options to include a trailing comma and
    // prevent fear when commenting out the last value.
    makeJsonParserHappy: 'even if last key had a trailing comma'

    // no configuration value should follow this line.
};

/* eslint-enable no-unused-vars, no-var */
