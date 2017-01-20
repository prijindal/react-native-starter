import mockery from 'mockery';

mockery.registerMock('react-native-animatable', { View: 'Animatable.View' });
mockery.registerMock('react-native-vector-icons/Ionicons', {});

mockery.enable();

mockery.warnOnUnregistered(false);
