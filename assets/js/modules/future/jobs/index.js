// Gộp hồ sơ 41 nghề theo thứ tự lĩnh vực. Chỉ số AI tính từ bảng nhiệm vụ (calc.aiIndex), không lưu sẵn.
import cntt from './cntt.js';
import thietke from './thietke.js';
import kinhdoanh from './kinhdoanh.js';
import taichinh from './taichinh.js';
import yte from './yte.js';
import giaoduc from './giaoduc.js';
import kythuat from './kythuat.js';
import dichvu from './dichvu.js';

export default [...cntt, ...thietke, ...kinhdoanh, ...taichinh, ...yte, ...giaoduc, ...kythuat, ...dichvu];
