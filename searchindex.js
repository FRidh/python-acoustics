Search.setIndex({docnames:["ambisonics","atmosphere","bands","building","cepstrum","criterion","decibel","descriptors","directivity","doppler","generator","imaging","index","octave","power","quantity","reference","reflection","room","signal","standards","turbulence","utils","weighting"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["ambisonics.rst","atmosphere.rst","bands.rst","building.rst","cepstrum.rst","criterion.rst","decibel.rst","descriptors.rst","directivity.rst","doppler.rst","generator.rst","imaging.rst","index.rst","octave.rst","power.rst","quantity.rst","reference.rst","reflection.rst","room.rst","signal.rst","standards.rst","turbulence.rst","utils.rst","weighting.rst"],objects:{"":{acoustics:[16,0,0,"-"]},"acoustics.Signal":{amplitude_envelope:[16,2,1,""],angle_spectrum:[16,2,1,""],bandpass:[16,2,1,""],bandpass_frequencies:[16,2,1,""],bandstop:[16,2,1,""],calibrate_to:[16,2,1,""],calibrate_with:[16,2,1,""],channels:[16,3,1,""],complex_cepstrum:[16,2,1,""],correlate:[16,2,1,""],decimate:[16,2,1,""],detrend:[16,2,1,""],duration:[16,3,1,""],energy:[16,2,1,""],fractional_octaves:[16,2,1,""],from_wav:[16,4,1,""],gain:[16,2,1,""],highpass:[16,2,1,""],instantaneous_frequency:[16,2,1,""],instantaneous_phase:[16,2,1,""],leq:[16,2,1,""],levels:[16,2,1,""],lowpass:[16,2,1,""],max:[16,2,1,""],max_level:[16,2,1,""],min:[16,2,1,""],ms:[16,2,1,""],normalize:[16,2,1,""],octavepass:[16,2,1,""],octaves:[16,2,1,""],peak:[16,2,1,""],peak_level:[16,2,1,""],phase_spectrum:[16,2,1,""],pick:[16,2,1,""],plot:[16,2,1,""],plot_angle_spectrum:[16,2,1,""],plot_complex_cepstrum:[16,2,1,""],plot_fractional_octaves:[16,2,1,""],plot_levels:[16,2,1,""],plot_octaves:[16,2,1,""],plot_phase_spectrum:[16,2,1,""],plot_power_spectrum:[16,2,1,""],plot_real_cepstrum:[16,2,1,""],plot_spectrogram:[16,2,1,""],plot_third_octaves:[16,2,1,""],power:[16,2,1,""],power_spectrum:[16,2,1,""],real_cepstrum:[16,2,1,""],resample:[16,2,1,""],rms:[16,2,1,""],samples:[16,3,1,""],sound_exposure:[16,2,1,""],sound_exposure_level:[16,2,1,""],spectrogram:[16,2,1,""],third_octaves:[16,2,1,""],times:[16,2,1,""],to_wav:[16,2,1,""],unwrap:[16,2,1,""],upsample:[16,2,1,""],values:[16,3,1,""],weigh:[16,2,1,""]},"acoustics.ambisonics":{acn:[0,5,1,""],n3d:[0,5,1,""],sn3d:[0,5,1,""]},"acoustics.atmosphere":{Atmosphere:[1,1,1,""]},"acoustics.atmosphere.Atmosphere":{REF_PRESSURE:[1,3,1,""],REF_TEMP:[1,3,1,""],TRIPLE_TEMP:[1,3,1,""],__init__:[1,2,1,""],attenuation_coefficient:[1,2,1,""],frequency_response:[1,2,1,""],impulse_response:[1,2,1,""],molar_concentration_water_vapour:[1,3,1,""],plot_attenuation_coefficient:[1,2,1,""],pressure:[1,3,1,""],reference_pressure:[1,3,1,""],reference_temperature:[1,3,1,""],relative_humidity:[1,3,1,""],relaxation_frequency_nitrogen:[1,3,1,""],relaxation_frequency_oxygen:[1,3,1,""],saturation_pressure:[1,3,1,""],soundspeed:[1,3,1,""],temperature:[1,3,1,""],triple_temperature:[1,3,1,""]},"acoustics.bands":{octave:[2,5,1,""],octave_high:[2,5,1,""],octave_low:[2,5,1,""],third2oct:[2,5,1,""],third:[2,5,1,""],third_high:[2,5,1,""],third_low:[2,5,1,""]},"acoustics.building":{mass_law:[3,5,1,""],rw:[3,5,1,""],rw_c:[3,5,1,""],rw_ctr:[3,5,1,""],rw_curve:[3,5,1,""],stc:[3,5,1,""],stc_curve:[3,5,1,""]},"acoustics.cepstrum":{complex_cepstrum:[4,5,1,""],inverse_complex_cepstrum:[4,5,1,""],minimum_phase:[4,5,1,""],real_cepstrum:[4,5,1,""]},"acoustics.criterion":{NC_CURVES:[5,6,1,""],nc:[5,5,1,""],nc_curve:[5,5,1,""]},"acoustics.decibel":{dbadd:[6,5,1,""],dbdiv:[6,5,1,""],dbmean:[6,5,1,""],dbmul:[6,5,1,""],dbsub:[6,5,1,""],dbsum:[6,5,1,""]},"acoustics.descriptors":{REFERENCE_ENERGY:[7,3,1,""],REFERENCE_INTENSITY:[7,3,1,""],REFERENCE_POWER:[7,3,1,""],REFERENCE_PRESSURE:[7,3,1,""],REFERENCE_SOUND_EXPOSURE:[7,3,1,""],equivalent_sound_pressure_level:[7,5,1,""],lden:[7,5,1,""],ldn:[7,5,1,""],leq:[7,5,1,""],lw:[7,5,1,""],normal_time_averaged_sound_intensity:[7,5,1,""],normal_time_averaged_sound_intensity_level:[7,5,1,""],peak_sound_pressure:[7,5,1,""],peak_sound_pressure_level:[7,5,1,""],sel:[7,5,1,""],sound_energy:[7,5,1,""],sound_energy_level:[7,5,1,""],sound_exposure:[7,5,1,""],sound_exposure_level:[7,5,1,""],sound_intensity:[7,5,1,""],sound_power_level:[7,5,1,""],sound_pressure_level:[7,5,1,""],time_averaged_sound_intensity:[7,5,1,""],time_averaged_sound_intensity_level:[7,5,1,""]},"acoustics.directivity":{Cardioid:[8,1,1,""],Custom:[8,1,1,""],Directivity:[8,1,1,""],FigureEight:[8,1,1,""],Omni:[8,1,1,""],SphericalHarmonic:[8,1,1,""],cardioid:[8,5,1,""],cartesian_to_spherical:[8,5,1,""],figure_eight:[8,5,1,""],plot:[8,5,1,""],spherical_harmonic:[8,5,1,""],spherical_to_cartesian:[8,5,1,""]},"acoustics.directivity.Custom":{__init__:[8,2,1,""],phi:[8,3,1,""],r:[8,3,1,""],theta:[8,3,1,""]},"acoustics.directivity.Directivity":{__init__:[8,2,1,""],plot:[8,2,1,""],rotation:[8,3,1,""],using_cartesian:[8,2,1,""],using_spherical:[8,2,1,""]},"acoustics.directivity.SphericalHarmonic":{__init__:[8,2,1,""],m:[8,3,1,""],n:[8,3,1,""]},"acoustics.doppler":{SOUNDSPEED:[9,6,1,""],frequency_shift:[9,5,1,""],velocity_from_doppler_shift:[9,5,1,""]},"acoustics.generator":{blue:[10,5,1,""],brown:[10,5,1,""],heaviside:[10,5,1,""],noise:[10,5,1,""],noise_generator:[10,5,1,""],pink:[10,5,1,""],violet:[10,5,1,""],white:[10,5,1,""]},"acoustics.imaging":{OctaveBandScale:[11,1,1,""],TICKS_OCTAVE:[11,6,1,""],TICKS_OCTAVE_KHZ:[11,6,1,""],TICKS_THIRD_OCTAVE:[11,6,1,""],TICKS_THIRD_OCTAVE_KHZ:[11,6,1,""],ThirdBandScale:[11,1,1,""],plot_bands:[11,5,1,""],plot_octave:[11,5,1,""],plot_third:[11,5,1,""]},"acoustics.imaging.OctaveBandScale":{BandTransform:[11,1,1,""],__init__:[11,2,1,""],get_transform:[11,2,1,""],limit_range_for_scale:[11,2,1,""],set_default_locators_and_formatters:[11,2,1,""]},"acoustics.imaging.OctaveBandScale.BandTransform":{__init__:[11,2,1,""],transform_non_affine:[11,2,1,""]},"acoustics.imaging.ThirdBandScale":{BandTransform:[11,1,1,""],__init__:[11,2,1,""],get_transform:[11,2,1,""],limit_range_for_scale:[11,2,1,""],set_default_locators_and_formatters:[11,2,1,""]},"acoustics.imaging.ThirdBandScale.BandTransform":{__init__:[11,2,1,""],transform_non_affine:[11,2,1,""]},"acoustics.octave":{Octave:[13,1,1,""],band_of_frequency:[13,5,1,""],exact_center_frequency:[13,5,1,""],frequency_of_band:[13,5,1,""],index_of_frequency:[13,5,1,""],lower_frequency:[13,5,1,""],nominal_center_frequency:[13,5,1,""],upper_frequency:[13,5,1,""]},"acoustics.octave.Octave":{__init__:[13,2,1,""],bandwidth:[13,3,1,""],center:[13,3,1,""],fmax:[13,3,1,""],fmin:[13,3,1,""],fraction:[13,3,1,""],interval:[13,3,1,""],lower:[13,3,1,""],n:[13,3,1,""],reference:[13,3,1,""],unique:[13,3,1,""],upper:[13,3,1,""]},"acoustics.power":{lw_iso3746:[14,5,1,""]},"acoustics.quantity":{Quantity:[15,1,1,""],Unit:[15,1,1,""],get_quantity:[15,5,1,""],quantities:[15,6,1,""],units:[15,6,1,""]},"acoustics.quantity.Quantity":{__init__:[15,2,1,""],dynamic:[15,3,1,""],energetic:[15,3,1,""],name:[15,3,1,""],reference:[15,3,1,""],symbol:[15,3,1,""],symbol_latex:[15,3,1,""],unit:[15,3,1,""]},"acoustics.quantity.Unit":{__init__:[15,2,1,""],name:[15,3,1,""],symbol:[15,3,1,""],symbol_latex:[15,3,1,""]},"acoustics.reflection":{Boundary:[17,1,1,""],DENSITY:[17,6,1,""],POROSITY_DECREASE:[17,6,1,""],SOUNDSPEED:[17,6,1,""],SPECIFIC_HEAT_RATIO:[17,6,1,""],impedance_attenborough:[17,5,1,""],impedance_delany_and_bazley:[17,5,1,""],numerical_distance:[17,5,1,""],reflection_factor_plane_wave:[17,5,1,""],reflection_factor_spherical_wave:[17,5,1,""]},"acoustics.reflection.Boundary":{__init__:[17,2,1,""],angle:[17,3,1,""],density:[17,3,1,""],distance:[17,3,1,""],flow_resistivity:[17,3,1,""],frequency:[17,3,1,""],impedance:[17,3,1,""],impedance_model:[17,3,1,""],plot_impedance:[17,2,1,""],plot_reflection_factor:[17,2,1,""],porosity_decrease:[17,3,1,""],reflection_factor:[17,3,1,""],reflection_model:[17,3,1,""],soundspeed:[17,3,1,""],specific_heat_ratio:[17,3,1,""],wavenumber:[17,3,1,""]},"acoustics.room":{c50_from_file:[18,5,1,""],c80_from_file:[18,5,1,""],clarity:[18,5,1,""],mean_alpha:[18,5,1,""],nrc:[18,5,1,""],t60_arau:[18,5,1,""],t60_eyring:[18,5,1,""],t60_fitzroy:[18,5,1,""],t60_impulse:[18,5,1,""],t60_millington:[18,5,1,""],t60_sabine:[18,5,1,""]},"acoustics.signal":{EqualBand:[19,1,1,""],Filterbank:[19,1,1,""],Frequencies:[19,1,1,""],OctaveBand:[19,1,1,""],amplitude_envelope:[19,5,1,""],amplitude_spectrum:[19,5,1,""],angle_spectrum:[19,5,1,""],apply_window:[19,5,1,""],auto_spectrum:[19,5,1,""],bandpass:[19,5,1,""],bandpass_filter:[19,5,1,""],convolve:[19,5,1,""],decibel_to_neper:[19,5,1,""],density_spectrum:[19,5,1,""],highpass:[19,5,1,""],instantaneous_frequency:[19,5,1,""],instantaneous_phase:[19,5,1,""],integrate_bands:[19,5,1,""],ir2fr:[19,5,1,""],isolate:[19,5,1,""],lowpass:[19,5,1,""],ms:[19,5,1,""],neper_to_decibel:[19,5,1,""],normalize:[19,5,1,""],octave_filter:[19,5,1,""],octavepass:[19,5,1,""],octaves:[19,5,1,""],phase_spectrum:[19,5,1,""],power_spectrum:[19,5,1,""],rms:[19,5,1,""],third_octaves:[19,5,1,""],window_scaling_factor:[19,5,1,""],wvd:[19,5,1,""],zero_crossings:[19,5,1,""]},"acoustics.signal.EqualBand":{__init__:[19,2,1,""]},"acoustics.signal.Filterbank":{__init__:[19,2,1,""],filters:[19,3,1,""],filtfilt:[19,2,1,""],frequencies:[19,3,1,""],lfilter:[19,2,1,""],order:[19,3,1,""],plot_power:[19,2,1,""],plot_response:[19,2,1,""],power:[19,2,1,""],sample_frequency:[19,3,1,""]},"acoustics.signal.Frequencies":{__init__:[19,2,1,""],angular:[19,2,1,""],bandwidth:[19,3,1,""],center:[19,3,1,""],lower:[19,3,1,""],upper:[19,3,1,""]},"acoustics.signal.OctaveBand":{__init__:[19,2,1,""],fraction:[19,3,1,""],nominal:[19,3,1,""],reference:[19,3,1,""]},"acoustics.standards":{iec_61260_1_2014:[20,0,0,"-"],iec_61672_1_2013:[20,0,0,"-"],iso_1996_1_2003:[20,0,0,"-"],iso_1996_2_2007:[20,0,0,"-"],iso_9613_1_1993:[20,0,0,"-"],iso_tr_25417_2007:[20,0,0,"-"]},"acoustics.standards.iec_61260_1_2014":{NOMINAL_OCTAVE_CENTER_FREQUENCIES:[20,3,1,""],NOMINAL_THIRD_OCTAVE_CENTER_FREQUENCIES:[20,3,1,""],OCTAVE_FREQUENCY_RATIO:[20,3,1,""],REFERENCE_FREQUENCY:[20,3,1,""],exact_center_frequency:[20,5,1,""],index_of_frequency:[20,5,1,""],lower_frequency:[20,5,1,""],nominal_center_frequency:[20,6,1,""],upper_frequency:[20,5,1,""]},"acoustics.standards.iec_61672_1_2013":{EXACT_THIRD_OCTAVE_CENTER_FREQUENCIES:[20,6,1,""],FAST:[20,6,1,""],NOMINAL_OCTAVE_CENTER_FREQUENCIES:[20,6,1,""],NOMINAL_THIRD_OCTAVE_CENTER_FREQUENCIES:[20,6,1,""],REFERENCE_FREQUENCY:[20,6,1,""],SLOW:[20,6,1,""],WEIGHTING_A:[20,6,1,""],WEIGHTING_C:[20,6,1,""],WEIGHTING_DATA:[20,6,1,""],WEIGHTING_FUNCTIONS:[20,6,1,""],WEIGHTING_SYSTEMS:[20,6,1,""],WEIGHTING_VALUES:[20,6,1,""],WEIGHTING_Z:[20,6,1,""],average:[20,5,1,""],fast:[20,5,1,""],fast_level:[20,5,1,""],integrate:[20,5,1,""],slow:[20,5,1,""],slow_level:[20,5,1,""],time_averaged_sound_level:[20,5,1,""],time_weighted_sound_level:[20,5,1,""],weighting_function_a:[20,5,1,""],weighting_function_c:[20,5,1,""],weighting_function_z:[20,5,1,""],weighting_system_a:[20,5,1,""],weighting_system_c:[20,5,1,""],weighting_system_z:[20,5,1,""]},"acoustics.standards.iso_1996_1_2003":{composite_rating_level:[20,5,1,""]},"acoustics.standards.iso_1996_2_2007":{REGRESSION_RANGE_FACTOR:[20,6,1,""],TONE_BANDWIDTH_CRITERION_DB:[20,6,1,""],TONE_LINES_CRITERION_DB:[20,6,1,""],TONE_SEEK_CRITERION:[20,6,1,""],TONE_WITHIN_PAUSE_CRITERION_DB:[20,6,1,""],Tonality:[20,1,1,""],Tone:[20,1,1,""],create_critical_band:[20,5,1,""],create_tone:[20,5,1,""],critical_band:[20,5,1,""],determine_tone_lines:[20,5,1,""],masking_noise_level:[20,5,1,""],masking_noise_lines:[20,5,1,""],noise_pause_seeker:[20,5,1,""],tonal_adjustment:[20,5,1,""],tonal_audibility:[20,5,1,""],tones_level:[20,5,1,""],window_correction:[20,5,1,""]},"acoustics.standards.iso_1996_2_2007.Tonality":{__init__:[20,2,1,""],analyse:[20,2,1,""],critical_band_at:[20,2,1,""],critical_bands:[20,3,1,""],determine_noise_pauses:[20,2,1,""],dominant_tone:[20,3,1,""],effective_analysis_bandwidth:[20,3,1,""],frequency_resolution:[20,3,1,""],nbins:[20,3,1,""],noise_pauses:[20,3,1,""],overview:[20,2,1,""],plot_results:[20,2,1,""],plot_spectrum:[20,2,1,""],reference_pressure:[20,3,1,""],regression_range_factor:[20,3,1,""],results_as_dataframe:[20,2,1,""],sample_frequency:[20,3,1,""],signal:[20,3,1,""],spectrum:[20,3,1,""],tones:[20,3,1,""],tsc:[20,3,1,""],window:[20,3,1,""]},"acoustics.standards.iso_1996_2_2007.Tone":{__init__:[20,2,1,""]},"acoustics.standards.iso_9613_1_1993":{REFERENCE_PRESSURE:[20,6,1,""],REFERENCE_TEMPERATURE:[20,6,1,""],SOUNDSPEED:[20,6,1,""],TRIPLE_TEMPERATURE:[20,6,1,""],attenuation_coefficient:[20,5,1,""],molar_concentration_water_vapour:[20,5,1,""],relaxation_frequency_nitrogen:[20,5,1,""],relaxation_frequency_oxygen:[20,5,1,""],saturation_pressure:[20,5,1,""],soundspeed:[20,5,1,""]},"acoustics.standards.iso_tr_25417_2007":{REFERENCE_ENERGY:[20,6,1,""],REFERENCE_INTENSITY:[20,6,1,""],REFERENCE_POWER:[20,6,1,""],REFERENCE_PRESSURE:[20,6,1,""],REFERENCE_SOUND_EXPOSURE:[20,6,1,""],equivalent_sound_pressure_level:[20,5,1,""],max_sound_pressure_level:[20,5,1,""],normal_time_averaged_sound_intensity:[20,5,1,""],normal_time_averaged_sound_intensity_level:[20,5,1,""],peak_sound_pressure:[20,5,1,""],peak_sound_pressure_level:[20,5,1,""],sound_energy:[20,5,1,""],sound_energy_level:[20,5,1,""],sound_exposure:[20,5,1,""],sound_exposure_level:[20,5,1,""],sound_intensity:[20,5,1,""],sound_power_level:[20,5,1,""],sound_pressure_level:[20,5,1,""],time_averaged_sound_intensity:[20,5,1,""],time_averaged_sound_intensity_level:[20,5,1,""]},"acoustics.utils":{SOUNDSPEED:[22,6,1,""],mean_tl:[22,5,1,""],w:[22,5,1,""],wavelength:[22,5,1,""]},"acoustics.weighting":{THIRD_OCTAVE_A_WEIGHTING:[23,6,1,""],THIRD_OCTAVE_C_WEIGHTING:[23,6,1,""],a2c:[23,5,1,""],a2z:[23,5,1,""],a_weighting:[23,5,1,""],c2a:[23,5,1,""],c2z:[23,5,1,""],c_weighting:[23,5,1,""],z2a:[23,5,1,""],z2c:[23,5,1,""]},acoustics:{Signal:[16,1,1,""],ambisonics:[0,0,0,"-"],atmosphere:[1,0,0,"-"],bands:[2,0,0,"-"],building:[3,0,0,"-"],cepstrum:[4,0,0,"-"],criterion:[5,0,0,"-"],decibel:[6,0,0,"-"],descriptors:[7,0,0,"-"],directivity:[8,0,0,"-"],doppler:[9,0,0,"-"],generator:[10,0,0,"-"],imaging:[11,0,0,"-"],octave:[13,0,0,"-"],power:[14,0,0,"-"],quantity:[15,0,0,"-"],reflection:[17,0,0,"-"],room:[18,0,0,"-"],signal:[19,0,0,"-"],standards:[20,0,0,"-"],utils:[22,0,0,"-"],weighting:[23,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","classmethod","Python class method"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:classmethod","5":"py:function","6":"py:data"},terms:{"":[3,10,14,17,18,19,20],"00e":[16,19,20],"1000f":17,"10n":13,"15e":[16,19,20],"16k":11,"25e":[16,19,20],"2kt":19,"30e":[16,19,20],"50e":[16,19,20],"60e":[16,19,20],"abstract":8,"boolean":16,"case":[13,16,19,20],"class":[3,8,11,13,15,17,19,20],"default":[3,7,8,11,16,19],"final":10,"float":[3,14,16,18],"function":[3,6,7,10,11,13,16,17,18,19],"import":4,"int":[2,4,5],"long":[10,20],"new":[4,11,16],"return":[2,5,7,8,10,11,13,14,15,16,18,19,20],"true":[8,11,15,16,19,20],"try":16,AND:4,For:[10,13,18,19,20],RMS:19,The:[1,2,3,4,6,7,8,9,10,11,13,15,16,17,18,19,20],Then:20,There:[2,4],Use:[16,19],Uses:11,Using:4,__init__:[1,8,11,13,15,17,19,20],a2c:23,a2z:23,a_weight:23,about:20,abov:16,absolut:[7,20],absorpt:[1,14,18,20],accept:[11,18],accord:[3,11,14,16,17,18,19,23],accur:[8,11,13,15,17,19,20],acn:0,acoust:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,17,18,19,20,22,23],add:6,add_subplot:4,added:4,addit:6,adjust:[7,20],affin:11,afterward:10,aim:20,air:[3,17,22],all:[7,11,16,19,20],along:[2,16],alpha:[1,14,17,18,20],alpha_i:18,alpha_x:18,alpha_z:18,also:[13,19,20],altern:11,alwai:[11,19],amax:16,ambient:[1,20],ambison:16,ambisonic_data_exchange_format:0,amin:16,amount:[1,4,10,16,19,20],amplifi:16,amplitud:[16,19],amplitude_envelop:[16,19],amplitude_spectrum:19,analogu:20,analys:[19,20],analysi:[4,20],analyt:[19,20],angl:[3,8,16,17,19],angle_spectrum:[16,19],angular:[19,22],ani:[16,20],annoy:20,api:12,appli:[8,16,19,20,23],applic:20,apply_window:19,approxim:16,arang:4,arau:18,arauacustica:18,arbitrari:11,arcco:8,area:[14,20],arg:11,arithmet:6,around:20,arrai:[2,3,5,7,8,10,11,16,18,19,20,22,23],artnum:20,assess:20,associ:11,assum:[13,19],assumpt:9,atmospher:[16,20],att:17,attenborough:17,attenu:[1,20],attenuation_coeffici:[1,20],attribut:[19,20],audibl:20,audio:20,auto:19,auto_spectrum:19,autocorrel:16,autocovari:4,autospectrum:19,avail:[10,20],averag:[6,7,16,20],averaging_tim:20,awai:9,ax0:4,ax1:4,axes:11,axi:[2,4,6,7,11,16,18,19,20],azimuth:8,background:14,backward:4,band:[5,10,11,13,16,18,20,23],band_of_frequ:13,band_typ:11,bandpass:[16,19],bandpass_filt:19,bandpass_fractional_octav:16,bandpass_frequ:16,bandpass_octav:16,bandpass_third_octav:16,bandstop:16,bandtransform:11,bandwidth:[13,19,20],bandwidth_3db:20,bandwidth_for_tone_criterion:20,bank:19,base:[1,9,19,20],basi:20,basic:[6,20],bazlei:17,becaus:[19,20],been:16,befor:[16,19],between:[1,3,4,5,9,16,23],bin:[16,19],bit:16,block:19,blog:2,blue:10,bogert:4,both:[16,19],boundari:17,brief:4,broadband:19,broadcast:16,brown:10,build:16,built:19,butter:19,butterworth:19,c2a:23,c2z:23,c50_from_fil:18,c80_from_fil:18,c_i:18,c_weight:23,calcul:[1,2,3,7,9,10,13,14,16,17,18,19,20],calibr:16,calibrate_to:16,calibrate_with:16,can:[11,16,19,20],cardioid:8,carri:11,cartesian:8,cartesian_to_spher:8,catalogue_detail:20,catalogue_tc:20,categor:20,caus:16,cdot:[1,6,7,9,13,19,20],ceil:16,center:[11,13,16,19,23],centerfrequ:[2,19,23],central:2,cep:4,cepstrum:16,certain:[7,20],chang:[4,10,16],channel:16,chapter:4,check:10,chosen:[17,19],circuit:4,circular:4,clariti:18,classifi:20,classmethod:16,clim:16,clip:16,code:16,coeffici:[1,14,18,19,20],collect:15,column:19,com:[2,18],combin:20,committe:20,common:19,commun:20,compar:19,complex:[4,16],complex_cepstrum:[4,16],composit:20,composite_rating_level:[7,20],comput:[1,4],concentr:[1,20],condit:[1,20],consid:[1,10,19],consist:[16,19],constain:19,constant:[9,10,16,20],constructor:8,contain:[1,2,3,5,6,10,11,16,17,18,19],content:12,contini:[7,20],contrari:[4,13],convent:8,convert:[8,16,19],convolut:19,convolv:19,coordin:8,copi:19,corner:16,cornerfrequ:[2,16],correct:[7,19,20],correl:16,correspond:[4,16,20],cos:[8,17],could:18,crack:4,creat:[10,11,16,20],create_critical_band:20,create_ton:20,criterion:[16,20],criterium:20,critic:20,critical_band:20,critical_band_at:20,criticalband:20,cross:[4,19],csnumber:20,current:19,curv:[3,5,10,20],custom:8,cut:19,cutoff:[16,19],cycl:10,d_i:20,dai:[7,20],data:[3,4,11,16,19,20],datafram:20,dbadd:6,dbdiv:6,dbmean:6,dbmul:6,dbsub:6,dbsum:6,debug:11,decibel:[16,19,20],decibel_to_nep:19,decim:[11,16],decomposit:19,decreas:[10,17],defin:[8,11,17,20],definit:20,degre:[0,3,8],delai:[4,16],delani:17,delta:20,den:[7,20],denot:8,densiti:[3,10,17,19],density_spectrum:19,depend:[16,19],depth:[16,17],describ:[1,17,19,20],descript:[16,20],descriptor:16,design:[4,13,16,20],detail:18,detect:20,determin:[4,11,13,18,19,20],determine_noise_paus:20,determine_tone_lin:20,detrend:16,dft:10,dictionari:[15,20],differ:[10,18,19],differenti:19,digit:20,direct:[9,16,19,20],discard:[16,20],distanc:[1,17],distinct:4,distribut:19,divid:[6,19],document:[16,20],doe:19,domain:[11,19,20],dominant_ton:20,done:[19,20],doppler:16,doubl:19,downsampl:[16,19],drift:20,due:[9,20],durat:[4,16],dure:[7,20],dynam:[15,16,19,20],e_0:[7,20],e_t:[7,20],each:[10,15,16,19,20],easi:19,easili:19,echo:4,edg:[13,20],edt:18,eff:20,effect:[9,20],effective_analysis_bandwidth:20,eight:8,either:19,electroacoust:20,element:[2,19],els:16,emit:9,empir:17,end:[16,20],energet:[6,15,20],energi:[7,16,19,20],energit:6,engin:4,enter:11,entir:16,envelop:[16,19],environ:20,environment:20,eqt:[7,20],equal:[10,19],equalband:19,equat:[13,20],equival:[7,11,16,20],equivalent_sound_pressure_level:[7,16,20],erfc:17,error:[16,19],estim:18,evalu:20,even:[7,13,20],everi:[13,19],exact:[13,19,20],exact_center_frequ:[13,20],exact_third_octave_center_frequ:20,exampl:[4,13,20],exclus:20,exist:[19,20],exp:[1,4,20],explan:19,expon:[1,20],exponenti:[17,20],exposur:[7,16,20],express:4,extrapol:20,eyr:18,f_0:9,f_1:[9,20],f_2:[9,20],f_3:20,f_4:20,f_c:[13,20],f_l:13,f_m:[13,20],f_n:19,f_r:[13,20],f_s:[7,19,20],f_u:13,factor:[2,6,7,10,16,17,19,20],fals:[1,8,11,13,15,16,19,20],fast:[16,20],fast_level:20,fewer:16,fft:[10,19],fftconvolv:[16,19],fig:4,figur:[1,4,8],figure_eight:8,figureeight:8,file:[16,18],file_nam:18,filenam:[1,8,16,17],filter:[4,13,16,20,23],filterbank:19,filtfilt:[16,19],fir:4,first:[2,16,19,20,23],fitzroi:18,flat:10,flow:17,flow_resist:17,fmax:13,fmin:13,follow:[0,4,8,10,13,19,20],force_bandwidth_criterion:20,force_tone_without_paus:20,formatt:11,formula:18,forward:4,found:19,four:18,fourier:4,frac:[1,6,7,8,9,13,16,17,18,19,20],fraction:[13,16,19,20],fractional_octav:16,freq:[3,22],frequenc:[1,2,3,4,7,9,11,13,16,17,18,22,23],frequency_of_band:13,frequency_resolut:20,frequency_respons:1,frequency_shift:9,from:[2,3,4,6,9,11,13,15,16,18,19,20,23],from_wav:16,fstart:19,fstop:19,ftype:16,full:[0,16,19],func:20,fundament:4,gain:16,gamma:17,gamma_0:17,gap:16,gaussian:19,gener:[2,11,16,19,20],get:[15,16],get_quant:15,get_transform:11,give:[19,20],given:[1,4,8,11,13,16,17,19,20],goe:19,greatest:[7,20],guidanc:20,h_r:[1,20],han:20,hand:19,harmon:[0,4,8,20],has:[8,10,19],have:[11,16,19],heali:4,heat:17,heavisid:10,help:[8,11,13,15,17,19,20],hertz:19,high:[16,19],highcut:[16,19],higher:2,highest:20,highpass:[16,19],home:20,hour:[7,20],how:[2,10,13,20],howev:[13,20],htm:20,http:[0,2,4,18,20],huei:4,humid:[1,20],i_0:[7,20],iec61672:20,iec:23,iec_61260_1_2014:[13,20],iec_61672_1_2013:[16,20],ieee:4,ight:20,iir:16,imag:16,imped:17,impedance_attenborough:17,impedance_delany_and_bazlei:17,impedance_model:17,implement:[8,20],improv:[11,19],impuls:[1,18,19],impulse_respons:1,incid:[3,17],inclin:8,includ:[19,23],include_rot:8,increas:10,indefinit:10,index:[12,13,16,20],index_of_frequ:[13,20],indic:[13,16,19,20],influenc:19,inform:2,infti:19,inherit:15,initi:[8,11,13,15,17,19,20],inplac:16,input:[4,19,20],input_dim:11,instal:11,instanc:[15,16,19,20],instantan:[7,16,19,20],instantaneous_frequ:[16,19],instantaneous_phas:[16,19],instead:[11,16,19],instrument:20,int_0:19,int_:[7,20],int_tim:7,integ:[16,20],integr:[7,16,19,20],integrate_band:19,integration_tim:20,intend:20,intens:[7,20],intercept:20,interest:3,intern:[1,20],interv:[7,13,20],invalid:5,invari:19,invers:[1,4,10],inverse_complex_cepstrum:4,ir2fr:19,irfft:10,iso24517:20,iso25417:20,iso:14,iso_1996_1_2003:[7,20],iso_1996_2_2007:20,iso_9613_1_1993:[1,20],iso_tr_25417_2007:[7,16,20],isol:19,isotherm:[1,20],iter:10,itertool:10,j_0:[7,20],k_i:20,k_tick:11,karczub:4,kelvin:1,kept:20,khz:[3,5,11,20],kilopasc:[1,20],kind:[7,19,20],kwarg:[11,16],l_a:6,l_b:6,l_i:20,l_n:20,l_p:[7,20],l_r:20,label:[11,16],land:20,last:[2,16,19,20,23],latex:15,latitud:8,law:3,ldai:7,lden:7,ldn:7,least:16,left:[1,4,7,8,9,17,18,20],length:[4,11,17],leq:[7,16],letter:0,level:[2,5,6,7,11,14,16,19,20,23],leven:7,lfilter:[16,19],librari:11,lim_:19,limit:[11,13,20],limit_range_for_scal:11,lin:4,line:20,line_classifi:20,linear:19,lines_classifi:20,list:[10,19],lnight:7,locat:11,log:[7,11,13,19,20],log_:[4,6,7,20],longer:20,longitud:8,loss:3,low:[16,19,20],lowcut:[16,19],lower:[2,9,13,16,19,20],lower_frequ:[13,20],lowpass:[16,19],lpai:14,lpaib:14,lti:19,ltv:19,lw_iso3746:14,made:9,magnitud:[4,8,17,19],mai:20,manual:11,mask:20,masking_noise_level:20,masking_noise_lin:20,mass:3,mass_law:3,match:11,materi:3,math:[4,13,20],mathbf:[7,18,19,20],mathrm:[7,17,19,20],matplotlib:[4,11],matrix:19,max:[7,16,20],max_level:16,max_sound_pressure_level:[16,20],maximum:[13,16,20],mean:[6,16,18,19,20,22],mean_alpha:18,mean_tl:22,measur:[9,14,19,20],merg:19,meteorolog:20,meter:[14,15,20],method:[8,16,19,20],might:16,milisecond:18,millington:18,min:16,minimum:[4,11,13,16],minimum_phas:4,minpo:11,minut:20,mode:[16,19],model:17,modul:[1,3,6,7,8,9,10,11,13,15,17,18,19,20],molar:[1,20],molar_concentration_water_vapour:[1,20],more:[2,4,18,20,22],most:20,move:9,multipl:[6,19,20],multipli:10,n3d:0,name:[11,15,16,18],namedtupl:15,narrowband:[10,19],nband:19,nbin:20,nc_curv:5,ndarrai:[2,4,14,16,18],ndelai:4,need:[11,19,20],neg:[9,19],neper:19,neper_to_decibel:19,night:7,nitrogen:[1,20],nois:[4,14,18,19,20],noise_gener:10,noise_lin:20,noise_paus:20,noise_pause_rang:20,noise_pause_seek:20,nomin:[13,19],nominal_center_frequ:[13,20],nominal_octave_center_frequ:20,nominal_third_octave_center_frequ:20,non:[11,19],none:[1,2,4,5,6,8,10,11,13,15,16,17,18,19,20],norm:8,normal:[3,7,10,16,17,19,20],normal_time_averaged_sound_intens:[7,20],normal_time_averaged_sound_intensity_level:[7,20],normalis:[0,17],norton:4,notat:11,note:[4,11,20],nperseg:20,nrc:18,nsampl:16,nsf:20,ntap:1,num:20,number:[2,10,13,16,20],numer:17,numerical_dist:17,numpi:[2,3,4,5,7,11,18,20,22,23],nyquist:16,object:[11,17,19,20],observ:9,obtain:19,occur:16,octav:[2,3,5,10,11,16,18,19,20,23],octave_band:2,octave_center_frequ:19,octave_filt:19,octave_frequency_ratio:20,octave_high:2,octave_low:2,octaveband:19,octavebandscal:11,octavepass:[16,19],octob:4,off:19,offer:7,often:8,omega:19,omni:8,one:[17,18,19,20,22],onli:[11,16,17,18,20],opendocu:20,oper:6,option:[4,11,16,18,19],order:[0,8,11,16,19,20],org:[0,4,20],origin:[4,16],other:[9,11,13,16,20],output:[10,19],output_dim:11,over:[2,6,10,19,20],overlap:20,overlin:19,overview:20,oxygen:[1,20],p_0:[7,20],p_a:[1,20],p_r:[1,20],page:12,pai:14,paib:14,param:20,paramet:[0,1,2,3,5,6,7,8,9,10,13,14,15,16,17,18,19,20],part:[11,13,16,20],particl:[7,20],pascal:15,pass:[16,19,20],path:17,pattern:8,paus:20,pdf:18,pdf_esp_7:18,peak:[4,7,16,20],peak_level:16,peak_sound_pressur:[7,16,20],peak_sound_pressure_level:[7,16,20],pei:4,peopl:20,per:[7,16,19,20],perform:[2,6,10,11,16,19,20],perhap:15,period:[7,20],perpendicular:18,phase:[4,16,17,19],phase_spectrum:[16,19],phi:8,pick:16,pink:10,place:16,plane:[17,18],pleas:18,plot:[1,4,8,11,16,17,19,20],plot_angle_spectrum:16,plot_attenuation_coeffici:1,plot_band:11,plot_complex_cepstrum:16,plot_fractional_octav:16,plot_imped:17,plot_level:16,plot_octav:[11,16],plot_phase_spectrum:16,plot_pow:19,plot_power_spectrum:16,plot_real_cepstrum:16,plot_reflection_factor:17,plot_respons:19,plot_result:20,plot_spectrogram:16,plot_spectrum:20,plot_third:11,plot_third_octav:16,plt:4,point:[1,20],pole:20,polynomi:20,poros:17,porosity_decreas:17,posit:[9,11,19],possibl:[17,20,23],possible_noise_paus:20,possibli:11,potenti:20,power:[7,10,16,19,20],power_spectrum:[16,19],precis:4,predict:20,prefer:23,prepar:20,present:19,pressur:[1,7,14,15,16,20],prevent:[16,19],princip:20,print:[4,20],prng:10,procedur:20,proceed:4,process:19,proportion:10,prosig:2,provid:[8,10,15,20],pseudo:[4,10],publicacion:18,purg:16,put:20,pyplot:4,quantiti:[16,19,20],quefrenc:[4,16],r_w:3,rac:20,radian:19,radiu:8,rai:17,randn:10,random:10,randomst:10,rang:[8,11,16,17,20],rate:[17,20],ratio:[13,17,20],readabl:11,real:[2,4,16,20],real_cepstrum:[4,16],receiv:[1,9],reconstruct:4,reduc:19,reduct:18,ref:[1,7,13,19,20],ref_pressur:1,ref_temp:1,refer:[1,7,12,13,15,19,20],reference_energi:[7,20],reference_frequ:20,reference_intens:[7,20],reference_pow:[7,20],reference_pressur:[1,7,20],reference_sound_exposur:[7,20],reference_temperatur:[1,20],reflect:16,reflection_factor:17,reflection_factor_plane_wav:17,reflection_factor_spherical_wav:17,reflection_model:17,regress:20,regression_range_factor:20,rel:[1,20],relat:[1,3,7,10,19,20],relative_humid:[1,20],relax:[1,20],relaxation_frequency_nitrogen:[1,20],relaxation_frequency_oxygen:[1,20],relfect:17,remov:23,repres:[11,16,19,20],request:13,requir:[17,20],resampl:16,resid:20,resist:17,resolut:[19,20],reson:1,respect:[4,16,17,18],respons:[1,18,19,20],result:[4,19,20],results_as_datafram:20,reverber:18,rewrit:19,rfft:19,rho0:3,rho:17,rho_0:17,right:[1,4,7,8,9,17,18,20],rms:[16,19],room:[14,16],root:[16,19],rotat:8,round:[13,20],rw_c:3,rw_ctr:3,rw_curv:3,sabin:18,same:19,sampl:[1,4,7,10,16,18,19,20],sample_frequ:[19,20],saph:4,sat:[1,20],satur:[1,20],saturation_pressur:[1,20],save:16,scalar:[2,23],scale:[11,19,20],schmidt:0,scipi:[4,8,10,16,19,20],search:[12,20],second:[4,7,16,19],section:[7,16,19,20],see:[7,8,11,13,15,16,17,18,19,20],seealso:19,seek:20,sel:7,select:[16,23],self:[8,11,13,15,17,19,20],semi:0,separ:[11,20],sequenc:[4,6,19],seri:[4,20],set:[4,11,16],set_default_locators_and_formatt:11,set_xlabel:4,set_xlim:4,set_ylim:4,sever:[8,18],shan:4,shape:[11,19],shift:[9,16,19],shorthand_nam:11,should:[1,2,11,16,19],show:[11,16],shown:16,side:19,sigma:[17,19],signal:[4,10,18,20,23],signatur:[8,11,13,15,17,19,20],signific:11,silent:13,sin:[4,8,17],singl:[6,16,17,19],singular:19,sinusoid:19,size:19,slope:20,slow:20,slow_level:20,smallest:20,sn3d:0,some:[16,18],soo:4,sos:19,sound:[1,3,7,9,14,16,17,18,20,22],sound_energi:[7,20],sound_energy_level:[7,20],sound_exposur:[7,16,20],sound_exposure_level:[7,16,20],sound_intens:[7,20],sound_power_level:[7,20],sound_pressure_level:[7,20],soundspe:[1,9,17,20,22],sourc:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23],space:[4,18],special:8,specif:[17,20],specifi:[1,16,20,23],specific_heat_ratio:17,spectral:20,spectrogram:16,spectrum:[4,10,16,19,20],speed:[1,3,9,17,18,20,22],sph_harm:8,sphere:8,spheric:[0,8,17],spherical_harmon:8,spherical_to_cartesian:8,sphericalharmon:8,sqrt:[8,17,19,20],squar:[14,16,19,20],standard:[1,2,7,13,18,19],star:19,start:[16,20],state:10,stc:3,stc_curv:3,step:5,stop:16,store:[15,16,20],str:[11,18],string:11,subclass:[8,19],subcommitte:20,subtract:6,suffic:16,sum:[4,6,7,20],sum_:[6,16,19],sum_i:20,sum_k:19,summat:[2,6,19,20],support:[11,18],surfac:[14,18,22],symbol:[15,20],symbol_latex:15,symposium:4,system:[4,11,19],t10:18,t20:18,t30:18,t60_arau:18,t60_eyr:18,t60_fitzroi:18,t60_impuls:18,t60_millington:18,t60_sabin:18,t_0:[1,20],t_1:[7,20],t_2:[7,20],t_i:20,tabl:[10,20],take:[4,11],taken:4,tap:1,tau:20,technic:20,temperatur:[1,20],term:20,terminologi:20,than:[5,11],them:23,therefor:[10,19,20],theta:[3,8,17],thi:[8,11,13,16,17,19,20],thick:3,third2oct:2,third:[2,3,11,18,20,23],third_high:2,third_low:2,third_octav:[16,19],third_octave_a_weight:23,third_octave_c_weight:23,third_octave_center_frequ:[19,23],thirdbandscal:11,those:20,three:[0,20],through:1,thu:19,tick:11,ticks_octav:11,ticks_octave_khz:11,ticks_third_octav:11,ticks_third_octave_khz:11,till:16,time:[4,6,7,9,16,18,19,20],time_averaged_sound_intens:[7,20],time_averaged_sound_intensity_level:[7,20],time_averaged_sound_level:[16,20],time_weighted_sound_level:[16,20],timestamp:16,titl:11,to_wav:16,toeplitz:19,togeth:20,tonal:20,tonal_adjust:20,tonal_aud:20,tone:[19,20],tone_bandwidth_criterion_db:20,tone_level:20,tone_lin:20,tone_lines_criterion_db:20,tone_seek_criterion:20,tone_within_pause_criterion_db:20,tones_level:20,tool:8,top:20,total:[16,18,20],toward:9,transact:4,transfer:20,transform:[4,11],transform_affin:11,transform_non_affin:11,transformnod:11,transmiss:3,travel:1,tripl:[1,20],triple_temp:1,triple_temperatur:[1,20],tromp:11,tsc:20,tukei:4,tupl:[0,15,19,20],two:[10,15,17,19],tyical:10,type:[2,8,10,11,13,15,16,17,19,20],understood:16,undesir:16,undon:1,uniqu:[10,13,19],unit:[7,16,19,20],unit_normal_vector:[7,20],unwrap:[16,19],upper:[2,5,9,13,16,19,20],upper_frequ:[13,20],upsampl:16,use:[4,11,13,16,20],used:[8,11,16,19,20],uses:[19,20],using:[1,4,10,11,16,17,19,20],using_cartesian:8,using_spher:8,usual:20,util:[11,16],v_r:9,v_s:9,valid:[5,16,19],valu:[3,5,7,10,11,13,15,16,17,18,19,20,23],vapour:[1,20],variant:19,varieti:20,variou:20,vector:[7,16,17,19,20],veloc:[7,9,20],velocity_from_doppler_shift:9,velocity_receiv:9,velocity_sourc:9,version:[16,19],via:20,vibrat:4,vill:19,violet:10,vmax:11,vmin:11,vol:4,vol_dens:3,volum:18,volumetr:3,w_i:19,w_z:19,wai:19,wall:3,want:[11,16],water:[1,20],watt:7,wav:[16,18],wave:17,wavelength:22,wavenumb:17,webstor:20,weigh:16,weight:16,weighting_a:20,weighting_c:20,weighting_data:20,weighting_funct:20,weighting_function_a:20,weighting_function_c:20,weighting_function_z:20,weighting_system:20,weighting_system_a:20,weighting_system_c:20,weighting_system_z:20,weighting_valu:20,weighting_z:20,welch:20,were:20,what:20,when:[8,11,17,19,20],where:[0,4,16,17,19,20],whether:[1,13,16],which:[1,2,6,16,19,20],white:[10,19],whole:20,wide:10,wigner:19,wiki:[0,4],wikipedia:[0,4],wilei:4,window:[16,20],window_correct:20,window_scaling_factor:19,within:[8,13,19,20],work:[8,13,15,16],wrap:[16,19],wref:7,write:1,written:19,wrong:19,wvd:19,www:[18,20],x_n:16,x_s:19,xlabel:11,xlabel_frequ:16,xlim:16,xscale:16,yield:0,ylabel:11,ylim:16,york:4,you:[11,16],yscale:16,z2a:23,z2c:23,zero:19,zero_cross:19,zero_phas:[16,19],zpk:19},titles:["Ambisonics","Atmosphere","Bands","Building","Cepstrum","Criterion","Decibel","Descriptors","Directivity","Doppler","Generator","Imaging","Welcome to the documentation of the acoustics module!","Octave","Power","Quantities and units","API Reference","Reflection","Room","Signal","Standards","&lt;no title&gt;","Utils","Weighting"],titleterms:{"class":[1,16],"function":[1,20],acoust:[12,16],all:10,ambison:0,api:16,atmospher:1,band:[2,19],build:3,center:20,cepstrum:4,color:10,constant:1,convers:19,criterion:5,decibel:6,descriptor:7,direct:8,document:12,doppler:9,filter:19,frequenc:[19,20],from:[1,7],gener:10,hilbert:19,iec:20,imag:11,indic:12,iso:[1,7,20],modul:[12,16],nois:10,nomin:20,octav:13,other:[7,10,19],per:10,power:14,quantiti:15,refer:16,reflect:17,room:18,signal:[16,19],spectra:19,standard:[16,20],system:20,tabl:12,transform:19,unit:15,util:22,weight:[20,23],welcom:12,window:19}})